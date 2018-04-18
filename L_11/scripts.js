/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay () {
    if (video.paused) {
        video.play();
    }else {
        video.pause();
    }
}

function updateButton() {
    const icon = video.paused ? '►' : '❙❙';
    toggle.textContent = icon;
}

function skip() {
    skipVal = this.dataset.skip;
    video.currentTime += parseFloat(skipVal);
}

function handleSliderChange() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime/video.duration) *100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrum (e) {
    const scrumVal = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrumVal;
}

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

let mousedown = false;
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);

progress.addEventListener('click',scrum);
progress.addEventListener('mousemove',(e) => mousedown && scrum(e));

toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => {
    button.addEventListener('click',skip);
})

// console.log('word');
ranges.forEach(range => {
    range.addEventListener('change',handleSliderChange);
    range.addEventListener('mousemove',handleSliderChange);
})