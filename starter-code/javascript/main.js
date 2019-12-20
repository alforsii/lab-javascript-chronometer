let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let splits = document.getElementById('splits');
let timer = document.querySelectorAll('#sphere span');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');

let number = document.getElementsByClassName('number');

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    chronometer.startClick();
    btnRight.innerHTML = 'SPLIT';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
  } else if (btnLeft.innerHTML === 'STOP') {
    btnLeft.innerHTML = 'START';
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    chronometer.stopClick();
    btnRight.innerHTML = 'RESET';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.innerHTML === 'SPLIT') {
    splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
  }
  if (btnRight.innerHTML === 'RESET') {
    splits.innerHTML = '';
    for (let i = 0; i < timer.length; i++) {
      if (timer[i].innerHTML !== ':') timer[i].innerHTML = 0;
    }
  }
});
