const x = document.querySelectorAll('audio[data-key]');
const keys = document.querySelectorAll('.key');

document.addEventListener('keydown',playSound);

function playSound(e) {
    x.forEach(function(item) {
        if (e.keyCode == item.dataset.key) {
            const elem = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            elem.classList.add('key-pressed');
            item.currentTime = 0;
            item.play();
        }
    });
}

function remiveTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('key-pressed');
}

keys.forEach(key => key.addEventListener('transitionend',remiveTransition));