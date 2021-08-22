import { makeAutoObservable } from "mobx";

class ClockStore {
  date = new Date();

  constructor() {
    makeAutoObservable(this);
  }

  setDate = (date) => {
    this.date = date;
  };
}

export const clockStore = new ClockStore();
