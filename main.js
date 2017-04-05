(function () {
    'use strict';
    function createChessboard() {
        const ZERO = 0;
        let body = document.body,
            script = body.querySelector('script'),
            table = createElem('table'),
            tHead = createElem('thead'),
            tBody = createElem('tbody'),
            tableSellCount = 9,
            thCaption = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''],
            tr, td, th, i, j;

        for (i = tableSellCount; i >= ZERO; i--) {
            tr = createElem('tr');
            for (j = ZERO; j <= tableSellCount; j++) {
                switch (true) {
                    case (i === tableSellCount):
                        th = createElem('th');
                        th.textContent = thCaption[j];
                        tr.appendChild(th);
                        tHead.appendChild(tr);
                        break;

                    case (i > ZERO && i < tableSellCount):
                        if (!j || j === tableSellCount) {
                            th = createElem('th');
                            th.textContent = i;
                            tr.appendChild(th);
                        } else {
                            td = createElem('td');
                            td.className = 'white';
                            if ( !(i % 2) && !(j % 2) ) {
                                td.className = 'black';
                            }
                            if ( (i % 2) && (j % 2) ) {
                                td.className = 'black';
                            }
                            tr.appendChild(td);
                        }
                        tBody.appendChild(tr);
                        break;

                    case (i === ZERO):
                        th = createElem('th');
                        th.textContent = thCaption[j];
                        tr.appendChild(th);
                        tBody.appendChild(tr);
                        break;
                }
            }
        }

        table.appendChild(tHead);
        table.appendChild(tBody);
        body.insertBefore(table, script);
    }

    function createElem(tagName) {
        return document.createElement(tagName);
    }

    createChessboard();
})();