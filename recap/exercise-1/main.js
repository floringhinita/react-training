const StopWatch = function() {
    let min = 0, sec = 0, msec = 0;
    let laps = 0;

    const $min = document.getElementById('min');
    const $sec = document.getElementById('sec');
    const $msec = document.getElementById('msec');

    $min.innerHTML = min;
    $sec.innerHTML = sec;
    $msec.innerHTML = msec;

    const $laps = document.getElementById('laps-list');

    const $btnStart = document.getElementById('btn-start');
    const $btnStop = document.getElementById('btn-stop');
    const $btnReset = document.getElementById('btn-reset');
    const $btnLap = document.getElementById('btn-lap');

    let interval;

    $btnStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startStopwatch, 10);
    };

    $btnStop.onclick = function() {
        clearInterval(interval);
    };

    $btnReset.onclick = function() {
        clearInterval(interval);
        min = sec = msec = laps = 0;

        $min.innerHTML = min.toString();
        $sec.innerHTML = sec.toString();
        $msec.innerHTML = msec.toString();
        $laps.innerHTML = '';
    };

    $btnLap.onclick = function() {
        const $lap_item = document.createElement('li');
        laps++;
        $lap_item.innerHTML = `Lap ${laps}: ${min}:${sec}:${msec}`;

        $laps.firstChild
            ? $laps.prepend($lap_item, $laps.firstChild)
            : $laps.appendChild($lap_item);
    };

    const startStopwatch = function() {
        msec++;
        $msec.innerHTML = msec;

        if (msec === 60) {
            sec++;
            msec = 0;
            $sec.innerHTML = sec;
        }

        if (sec === 60) {
            min++;
            sec = 0;
            $min.innerHTML = min;
        }
    }
};