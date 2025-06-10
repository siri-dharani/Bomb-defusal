let timerele = document.getElementById('timer');
let defuserele = document.getElementById('defuser');
let countdown = 10;
let intervaltime = setInterval(function() {
    countdown = countdown - 1;
    timerele.textContent = countdown;
    if (countdown === 0) {
        timerele.textContent = "BOOM!!";
        clearInterval(intervaltime);
    }
}, 1000);
defuserele.addEventListener('keydown', function(event) {
    let bombdefuser = defuserele.value;
    if (event.key === "Enter" && bombdefuser === "defuse" && countdown !== 0) {
        timerele.textContent = "You did it!!";
        clearInterval(intervaltime);
    }
});