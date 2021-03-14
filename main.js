const playPauseBtn = document.querySelector('.playPauseBtn');
const coveringBtn = document.querySelector('.coveringBtn');
const backVideo = document.querySelector('.backVideo');
const onLoading = document.querySelector('.loading')
let play="true"

window.addEventListener('load',() => {
    onLoading.style.display = 'none';
})


function onLoadVideo(){

playPauseBtn.addEventListener('click', ()=>{
    if(play){
    coveringBtn.classList.add('slideBtn');
    play = false;
    backVideo.pause();
    }
    else if(!play){
        coveringBtn.classList.remove('slideBtn');
        play = true;
        backVideo.play();
        
    }
})
}

onLoadVideo();

// matches와 classList.contains의 차이.
// 1. contains는 정확하게 하나의 클래스 단어 하나만 체크 가능하나,
// 2. matches는 'a.someClass.foo' 또는 '.someClass[data-num="3"]:hover'
//      처럼 다양한 연산(?)을 거친 클래스도 선택 가능하다.