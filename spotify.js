console.log("Welcome to Spotify");
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName: "let me love you", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName: "let me love you", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName: "let me love you", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName: "let me love you", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName: "let me love you", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName: "let me love you", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songName: "let me love you", filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songName: "let me love you", filepath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songName: "let me love you", filepath:"songs/10.mp3", coverpath:"covers/10.jpg"},
]

let audioElement = new Audio("1.mp3");
//audioElement.play();

let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

//listen to events
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }

})
