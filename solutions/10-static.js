export default class Time {
   static fromString(str) {
    const [hours, minutes] = str.split(':').map(Number);
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
