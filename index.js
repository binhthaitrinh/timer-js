class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }

  // Need to be arrow function for the click above 'this' to refer to object instance
  // or fix above code to this.start.bind(this)
  start = () => {
    console.log('Time to start');
  };
}

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');

const timer = new Timer(durationInput, startButton, pauseButton);
