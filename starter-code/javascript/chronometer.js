class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.minutes = 0;
    this.sec = 0;
    this.intervalId;
  }
  startClick() {
    // if (this.currentTime) throw new Error("Stopwatch has already started.");
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.sec++;
      if (this.sec > 59) this.sec = 0;
      for (let i = 0; i < number.length; i++) {
        let minutes = this.twoDigitsNumber(this.getMinutes());
        let seconds = this.twoDigitsNumber(this.sec);
        if (number[i].id === 'minDec') {
          number[i].innerHTML = minutes[0];
        } else if (number[i].id === 'minUni') {
          number[i].innerHTML = minutes[1];
        } else if (number[i].id === 'secDec') {
          number[i].innerHTML = seconds[0];
        } else if (number[i].id === 'secUni') {
          number[i].innerHTML = seconds[1];
        }
      }
    }, 1000);
  }
  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }
  getSeconds() {
    if (!this.currentTime) return 0;
    let sec = 0;
    this.currentTime;
    if (this.currentTime % 60 === 0) sec = 1;
    return sec;
  }
  twoDigitsNumber(val) {
    if (val >= 0 && val < 10) return (val = '0' + val.toString());
    else return val.toString();
  }
  stopClick() {
    // if (!this.currentTime) throw new Error("Stopwatch is not started.");

    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let num = 0;
    for (let i = 0; i < timer.length; i++) {
      if (i > 0 && i < 5) {
        num += timer[i].innerHTML;
      }
    }
    return num;
  }
}
