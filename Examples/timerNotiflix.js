//https://flatpickr.js.org/
//https://github.com/notiflix/Notiflix#readme



import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import notiflix from 'notiflix';

document.body.style.backgroundColor = '#ece5da';
const TIMER_DELAY = 1000;
let intervalId = null;
let selectedDate = null;
let currentDate = null;

const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;

Report.info(
  '👋 Hello!',
  'Please, choose a date and click on start',
  'Okay'
);

flatpickr(calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Report.failure(
        '🥺 Ooops...',
        'Please, choose a date in the future',
        'Okay'
      );
    } else {
      Report.success(
        '🥰 Congratulation! ',
        'Click on start!',
        'Okay'
      );
      startBtn.disabled = false;
      selectedDate = new Date(selectedDates[0]).getTime();
    }
  },
});

startBtn.addEventListener('click', () => setTimer(selectedDate));

function setTimer(selectedDate) {
  timer.start(selectedDate);
}

const timer = {
  rootSelector: document.querySelector('.timer'),
  daysElement: null,
  hoursElement: null,
  minutesElement: null,
  secondsElement: null,

  start(selectedDate) {
    intervalId = setInterval(() => {
      startBtn.disabled = true;
      calendar.disabled = true;
      currentDate = Date.now();
      const delta = selectedDate - currentDate;

      if (delta <= 0) {
        this.stopTimer();
        return;
      }

      this.updateTimerElements(delta);
    }, TIMER_DELAY);
  },

  stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = true;
    calendar.disabled = false;
    Report.info(
      '👏 Congratulation!',
      'Timer stopped!',
      'Okay'
    );
  },

  updateTimerElements(delta) {
    const { days, hours, minutes, seconds } = this.convertMs(delta);
    this.daysElement.textContent = this.addLeadingZero(days);
    this.hoursElement.textContent = this.addLeadingZero(hours);
    this.minutesElement.textContent = this.addLeadingZero(minutes);
    this.secondsElement.textContent = this.addLeadingZero(seconds);
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  },
};


timer.daysElement = timer.rootSelector.querySelector('[data-days]');
timer.hoursElement = timer.rootSelector.querySelector('[data-hours]');
timer.minutesElement = timer.rootSelector.querySelector('[data-minutes]');
timer.secondsElement = timer.rootSelector.querySelector('[data-seconds]');
        


