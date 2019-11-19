class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    // if (this.currentTime) throw new Error("Stopwatch has already started.");
    this.intervalId = setInterval(() => {
      this.currentTime++;
      // console.log(this.currentTime); //test-it's counting.
    }, 1000);
  }
  getMinutes() {
    // if (!this.currentTime) return 0;
    // let minutes = 0;
    // this.intervalId = setInterval(() => {
    //   if (this.currentTime === 60) {
    //     minutes++;
    //   }
    //   //    console.log(this.currentTime);
    //   // console.log(minutes);
    // }, 1000);
    // return Number(minutes);
    let minutes = Math.floor(this.currentTime / 60);
    // console.log(minutes);
    return minutes;
  }
  getSeconds() {
    if (!this.currentTime) return 0;
    let sec = Math.floor(this.currentTime);
    if (sec > 60) sec = 0;
    return sec;
  }
  twoDigitsNumber() {}
  stopClick() {
    // if (!this.currentTime) throw new Error("Stopwatch is not started.");

    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}
