document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let arr = ['list', 'item', 'list-item', 'drop', 'down', 'drop-down'];

    renderButton(arr);

    function renderButton(array) {
        let body = document.body,
            ul = createListItems(array),
            btn = createElem('button');

        btn.textContent = 'button';

        btn.addEventListener('click', displayListItems);
        ul.addEventListener('click', changeValue);

        body.appendChild(btn);
        body.appendChild(ul);

    }

    function createListItems(array) {
        let ul = createElem('ul'),
            len = array.length,
            li,
            i;

        for (i = 0; i < len; i++) {
            li = createElem('li');
            li.textContent = array[i];
            ul.appendChild(li);
        }

        ul.classList = 'hide';
        return ul;
    }

    function changeValue(e) {
        let target = e.target,
            btn = document.querySelector('button');

        btn.textContent = target.textContent;
        hideList();
    }

    function createElem(tagName) {
        return document.createElement(tagName);
    }

    function displayListItems(e) {
        e.stopPropagation();
        let ul = document.querySelector('ul');

        ul.classList.toggle('show');
    }

    function hideList() {
        let list = document.querySelector('ul');

        list.className = 'hide';
    }

    document.addEventListener('click', hideList);
});