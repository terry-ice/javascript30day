const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')



function togglePlay() {
  console.log(video.paused,'video.pased')
  // if(video.paused){
  //   video.play();
  // }else{
  //   video.pause();
  // }
  const method = video.paused? 'play':'pause'
  video[method]();
}
video.addEventListener('click',togglePlay)