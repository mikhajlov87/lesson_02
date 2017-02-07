'use strict';

window.onload = function () {

  var studArr = ['Obi Van Kenobi', 'Kvai Gon Dgine', 'Anakin Skywoker'],
      studLvlArr = ['Middle', 'Senior', 'Junior'],
      studMeditArr = ['+', '+', '+'];

  var index = document.getElementsByClassName('index')[0],
      stud = document.getElementsByClassName('students')[0],
      level = document.getElementsByClassName('level')[0],
      passed = document.getElementsByClassName('passed')[0];

  var form = document.forms[0],
      checkbox = document.getElementById('passed'),
      btn = document.getElementById('button');

  function createElementLi(parent, text) {
    var li = document.createElement('li');
    li.innerHTML = text;
    parent.appendChild(li);
  }

  function displayStudents() {
    var len = studArr.length,
        i;
    for (i=0; i<len; i++) {
      createElementLi(stud, studArr[i]);
      createElementLi(index, (i+1));
      createElementLi(level, studLvlArr[i]);
      createElementLi(passed, studMeditArr[i]);
    }
  }

  function checkOutCheckbox() {
    if (checkbox.checked) {
      studMeditArr.push(checkbox.value);
    } else {
      studMeditArr.push('-');
    }
  }

  function checkOutRadioButton() {
    var elem = form.elements.level,
        len = elem.length,
        i;
    for (i=0; i<len; i++) {
      if (elem[i].checked) {
        studLvlArr.push(elem.value);
      }
    }
  }

  function addNewStudent() {
    var name = form.elements.name;
    if (name.value == '') {
      name.value = prompt('Please, enter a name of the student!');
    }
    studArr.push(name.value);
  }

  function removeAllChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function clearStudentsInfo() {
    removeAllChildren(index);
    removeAllChildren(stud);
    removeAllChildren(level);
    removeAllChildren(passed);
  }

  function addNewStudentInEndOfList(event) {
    event.preventDefault();
    clearStudentsInfo();
    addNewStudent();
    checkOutCheckbox();
    checkOutRadioButton();
    displayStudents();
    form.reset();
  }

  displayStudents();
  btn.onclick = addNewStudentInEndOfList;

  function removeStudFromArr(arr, index) {
    arr.splice(index, 1);
  }

  function removeStud (arr1, arr2, arr3, index) {
    removeStudFromArr(arr1, index);
    removeStudFromArr(arr2, index);
    removeStudFromArr(arr3, index);
    clearStudentsInfo();
    displayStudents();
  }

  var first = document.getElementById('first'),
      last = document.getElementById('last'),
      from = document.getElementById('from');

  first.onclick = function (event) {
    event.preventDefault();
    removeStud(studArr, studLvlArr, studMeditArr, 0);
  }

  last.onclick = function (event) {
    event.preventDefault();
    var i = studArr.length - 1;
    removeStud(studArr, studLvlArr, studMeditArr, i);
  }

  from.onclick = function (event) {
    event.preventDefault();
    var i = prompt('Enter position to delete...');
    var len = studArr.length;
    if (i<=0 || i>len || isNaN(i)) {
      alert('I am sorry, it does not work');
    } else {
      --i;
      removeStud(studArr, studLvlArr, studMeditArr, i);
    }
  }
};
