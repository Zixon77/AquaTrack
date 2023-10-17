import { makeObservable,makeAutoObservable, action } from "mobx";

class AppStore {
    constructor() {
      makeAutoObservable(this);
    }
  
    // Define your state variables and actions here
    addTime = new Date().toLocaleTimeString()
    addWater = 0;
    waterInputted = false;
    temp = false;
    dailyGoal = 100;
    amountCups = 0;

    storeTime(time) {
      this.addTime = time;
    }

    storeAdd(water){
      this.temp = true
      this.addWater = water;
      this.waterInputted = true
      this.amountFilled = this.dailyGoal - this.addWater;
      this.incrementCups(); 
    }

    makeFalse(){
      this.waterInputted = false;
    }

   @action
  incrementCups() {
    if (this.temp) {
      this.amountCups += 1;
      console.log('store: ' + this.amountCups); 
      console.log(100-this.amountFilled)
    }
    this.temp = false;
  }
  }
  
  const store = new AppStore();
  export default store;