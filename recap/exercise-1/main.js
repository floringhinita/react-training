const StopWatch = function() {
    let min = 0, sec = 0, msec = 0;
    let laps = 0;

    const $min = document.getElementById('min');
    const $sec = document.getElementById('sec');
    const $msec = document.getElementById('msec');


    setValue($min, min);
    setValue($sec, sec);
    setValue($msec, msec);

    const $laps = document.getElementById('laps-list');

    const $btnStart = document.getElementById('btn-start');
    const $btnStop = document.getElementById('btn-stop');
    const $btnReset = document.getElementById('btn-reset');
    const $btnLap = document.getElementById('btn-lap');

    let interval;

    $btnStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startStopwatch, 10);
        $btnStart.setAttribute('disabled', 'disabled');
    };

    $btnStop.onclick = function() {
        clearInterval(interval);
        $btnStart.removeAttribute('disabled');
    };

    $btnReset.onclick = function() {
        clearInterval(interval);
        $btnStart.removeAttribute('disabled');
        min = sec = msec = laps = 0;

        setValue($min, min);
        setValue($sec, sec);
        setValue($msec, msec);
        $laps.innerHTML = '';
    };

    $btnLap.onclick = function() {
        const $lap_item = document.createElement('li');
        laps++;
        $lap_item.innerHTML = `Lap ${laps}: ${min.toStringLeadZero()}:${sec.toStringLeadZero()}:${msec.toStringLeadZero()}`;

        $laps.firstChild
            ? $laps.prepend($lap_item, $laps.firstChild)
            : $laps.appendChild($lap_item);
    };

    const startStopwatch = function() {
        msec++;
        setValue($msec, msec);

        if (msec === 60) {
            sec++;
            msec = 0;
            setValue($sec, sec);
        }

        if (sec === 60) {
            min++;
            sec = 0;
            setValue($min, min);
        }
    }
};

const setValue = function(element, value) {
    element.innerHTML = value.toStringLeadZero();
};

Number.prototype.toStringLeadZero = function() {
    return this.valueOf() < 10 ? "0" + this.valueOf() : this.valueOf().toString();
};