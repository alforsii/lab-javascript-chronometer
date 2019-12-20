class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    // if (this.currentTime) throw new Error("Stopwatch has already started.");
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.getMinutes();
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
    let sec = this.currentTime;
    if (this.currentTime > 60) sec = 55;
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
