//some javascript
const show = document.getElementById('set');
const btnStr = document.getElementById('startBtn');
const btnStp = document.getElementById('stopBtn');
let num = 1;
let StopCount;
const Count = () => {
    StopCount = setInterval(() => {
        show.innerHTML = `${num}`;
        console.log(show);
        num++;
    }, 1000);
}

btnStr.addEventListener('click', Count);

btnStp.addEventListener('click', () => {
    clearInterval(StopCount);
});