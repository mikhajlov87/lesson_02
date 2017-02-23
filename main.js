        /* ДЗ 1 */
/*
     Написать электронные часы,
     которые в консоли выводят раз в секунду
     время в формате 23:59
     3:4 - плохо
     03:04 - хорошо
     подсказка - очищать консоль можно командой console.clear()
 */

(function () {
    var hours = '23',
        minutes = '59',
        seconds = '57',
        UNIT_OF_TIME = 60,
        METRIC_SYSTEM = 10,
        ONE_DAY = 24;

    setInterval(function(){
        seconds++;
        if (seconds < METRIC_SYSTEM) {
            seconds = '0' + seconds;
        } else if (seconds === UNIT_OF_TIME) {
            seconds = '00';
            minutes++;

            if (minutes < METRIC_SYSTEM) {
                minutes = '0' + minutes;
            } else if (minutes === UNIT_OF_TIME) {
                minutes = '00';
                hours++;

                if (hours === ONE_DAY) {
                    hours = '00'
                }
            }
        }

        console.clear();
        console.log(hours + ' : ' + minutes + ' : ' + seconds);
    }, 1000);
})();


(function () {
    var date;
    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        };

    setInterval(function () {
        date = new Date();
        console.clear();
        console.log(date.toLocaleString('ru', options));
    }, 1000);
})();

    /* ДЗ2*/
/*
 Написать программу-бомбу, которая будет отсчитывать 10 секунд в обратном порядке,
 отображая, оставшееся время в консоли браузера.
 по истечении времени будет выводиться alert с текстом BOOOM.
 После "взрыва" счетчик должен остановиться.
 */

(function () {
    var TIME_OF_DEATH = 0,
        startTime,
        i = 1;

    for (startTime = 10; startTime >= TIME_OF_DEATH; startTime--) {
        (function () {
            var time = startTime;

            setTimeout(function () {
                console.clear();
                console.log('you will die in ' + time + ' sec...');
            }, 1000 * i);
            i++;

            if (startTime === TIME_OF_DEATH) {
                setTimeout(function () {
                    alert('BOOOM!!!');
                    console.clear();
                    console.log('%c' + 'You are already DEAD!!!',
                        'background-color: black;' +
                        'border-radius: 5px;' +
                        'color: red; padding: 5px;' +
                        'font-size: 18px');
                }, 1000 * i);
            }
        })(startTime);
    }
})();

/* ДЗ3

        for (var i = 1; i <= 10; i++) {
            setTimeout(function() {
                console.log(i);
            }, 1000 * i);
        }

 исправить существующий код таким образом, чтобы
 console.log выводила корректное значение переменной i
 */
(function() {
    for (var i = 1; i <= 10; i++) {
        (function () {
            var count = i;
            setTimeout(function () {
                console.log(count);
            }, i * 1000);
        })(i);
    }
})();

