const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function togglePlay () {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}
function updateButton () {
  toggle.textContent = this.paused ? '►' : '❚❚'
}
function skip () {
  video.currentTime += parseFloat(this.dataset.skip)
}
function handleEangeUpdate (e) {
  // volume 播放的音量
  // playbackRate  播放时的速率
  video[this.name] = this.value
}
function handleProgress () {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}
function scrub (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleEangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleEangeUpdate))

progress.addEventListener('click', scrub)
