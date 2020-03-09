class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTick = callbacks.onTick;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // Need to be arrow function for the click above 'this' to refer to object instance
  // or fix above code to this.start.bind(this)
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();

    // set inteval return an ID integer, representing running interval
    //to stop it, call clearInterval(id)
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // const timeRemaining = this.timeRemaining;
      // this.timeRemaining = timeRemaining - 1;
      // We've hidden away complexity above by using getter and setter
      // setter = getter - 1;
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    console.log('Timer just ticked down');
  },
  onComplete() {
    console.log('timer is completed');
  }
});
