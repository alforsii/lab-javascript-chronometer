class Chronometer {
  constructor() {
    this.currentTime = 0;
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
      // this.getMinutes();
      // this.getSeconds();
      // console.log(this.currentTime); //test-it's counting.
    }, 1000);
  }
  getMinutes() {
    // if (!this.currentTime) return 0;
    // let minutes = 0;
    // if (this.currentTime === 60) {
    //   minutes++;
    //   this.currentTime = 0;
    // }
    // return Number(minutes);
    let minutes = Math.floor(this.currentTime / 60);
    // console.log(minutes);
    return minutes;
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
  splitClick() {}
}
