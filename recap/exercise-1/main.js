const StopWatch = function() {
    let hour = 0, min = 0, sec = 0;
    let laps = 0;

    const $hour = document.getElementById('hour');
    const $min = document.getElementById('min');
    const $sec = document.getElementById('sec');

    $hour.innerHTML = hour;
    $min.innerHTML = min;
    $sec.innerHTML = sec;

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
        hour = min = sec = laps = 0;

        $hour.innerHTML = hour.toString();
        $min.innerHTML = min.toString();
        $sec.innerHTML = sec.toString();
        $laps.innerHTML = '';
    };

    $btnLap.onclick = function() {
        const $lap_item = document.createElement('li');
        laps++;
        $lap_item.innerHTML = `Lap ${laps}: ${hour}:${min}:${sec}`;

        $laps.firstChild
            ? $laps.prepend($lap_item, $laps.firstChild)
            : $laps.appendChild($lap_item);
    };

    const startStopwatch = function() {
        sec++;
        $sec.innerHTML = sec;

        if (sec === 60) {
            min++;
            sec = 0;
            $min.innerHTML = min;
        }

        if (min === 60) {
            hour++;
            min = 0;
            $hour.innerHTML = hour;
        }
    }
};