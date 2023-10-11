import { makeObservable,makeAutoObservable } from "mobx";

class AppStore {
    constructor() {
      makeAutoObservable(this);
    }
  
    // Define your state variables and actions here
    addTime = new Date().toLocaleTimeString()
    addWater = 0;
    waterInputted = false;
    dailyGoal = 100;
    amountFilled;
    amountCups = 0;

    storeTime(time) {
      this.addTime = time;
    }

    storeAdd(water){
      this.addWater = water;
      console.log( this.addWater + ' water added')
      this.waterInputted = true
      this.setCups()
      this.amountFilled = this.dailyGoal - this.addWater;
      console.log(this.amountFilled + " left")
    }

    makeFalse(){
      this.waterInputted = false;
    }

    setCups(){
 
    }
  }
  
  const store = new AppStore();
  export default store;