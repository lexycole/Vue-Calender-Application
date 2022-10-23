import { seedData } from './seed.js';

export const store = {
  state: {
    seedData
  },
  getActiveDay () {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay (dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
    });
  },
  getEventObj (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    return dayObj.events.find(event => event.details === eventDetails);
  },
  submitEvent (eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ "details": eventDetails, "edit": false });
  },
  // edit ation and mutation
  editEvent (dayId, eventDetails) {
    this.resetEditOfAllEvents();

    const eventObj = this.getEventObj(dayId, eventDetails);

    eventObj.edit = true;
  },
  // we’ll use the map() function to run through all the data and set all the events edit property to false:
  resetEditOfAllEvents () {
    this.state.seedData.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      });
    });
  },
  updateEvent (dayId, originalEventDetails, updatedEventDetails) {
    // Find the day object
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    // Set the event details to the new details
    // and turn off editing
    eventObj.details = updatedEventDetails;
    eventObj.edit = false;
  },
  deleteEvent (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    const eventIndexToRemove = dayObj.events.findIndex(event => event.details === eventDetails);

    dayObj.events.splice(eventIndexToRemove, 1)
  }
}
