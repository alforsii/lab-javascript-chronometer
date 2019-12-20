var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

let number = document.getElementsByClassName('number');

// for (let i = 0; i < number.length; i++) {
//   console.log('Output for: number', number[i]);
//   if (number[i].id === 'minDec') {
//     number[i].innerHTML = chronometer.getMinutes();
//   } else if (number[i].id === 'secDec') {
//     number[i].innerHTML = chronometer.getSeconds();
//   }
// }

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
  console.log('Output for: btnLeft.classList', btnLeft.classList);
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  // if (btnLeft.innerHTML === 'RESET') {
  //     btnLeft.innerHTML = 'STOP';
  //     btnLeft.classList.remove('start');
  //     btnLeft.classList.add('stop');
  //   } else if (btnLeft.innerHTML === 'STOP') {
  //     btnLeft.innerHTML = 'START';
  //     btnLeft.classList.remove('stop');
  //     btnLeft.classList.add('start');
  //   }
});
