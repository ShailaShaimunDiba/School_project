document.addEventListener('DOMContentLoaded', () => {
    // TimeStampShow JS
    let timeStamp = document.querySelector('.timestamp');
    setInterval(() => {
        timeStamp.innerHTML = TimeStamp(false, false, true);
    }, 1000);
});