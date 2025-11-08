import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import type { 
  BaseBeverageType,
  BeverageType,
  CreamerType, 
  SyrupType,
} from "../types/beverage";


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[1],
    bases: bases as BaseBeverageType[],
    currentBase: bases[0] as BaseBeverageType,
    creamers: creamers as CreamerType[],
    currentCreamer: creamers[0] as CreamerType,
    syrups: syrups as SyrupType[],
    currentSyrup: syrups[0] as SyrupType,

    savedBeverages: [] as {
      name: string;
      config: {
        temp: string;
        baseId: string;
        creamerId: string;
        syrupId: string;
      };
    }[],
  }),

  actions: {
    makeBeverage(name: string) {
      const newBeverage = {
        name,
        config: {
          temp: this.currentTemp,
          baseId: this.currentBase.id,
          creamerId: this.currentCreamer.id,
          syrupId: this.currentSyrup.id,
        },
      };
      const existing = this.savedBeverages.findIndex((b) => b.name === name);
      if (existing !== -1) {
        this.savedBeverages[existing] = newBeverage;
      } else {
        this.savedBeverages.push(newBeverage);
      }
    },

    showBeverage(name: string) {
      const beverage = this.savedBeverages.find((b) => b.name === name);
      if (!beverage) return;

      const { temp, baseId, creamerId, syrupId } = beverage.config;

      this.currentTemp = this.temps.find((t) => t === temp) || this.temps[0];
      this.currentBase = this.bases.find((b) => b.id === baseId) || this.bases[0];
      this.currentCreamer =
        this.creamers.find((c) => c.id === creamerId) || this.creamers[0];
      this.currentSyrup =
        this.syrups.find((s) => s.id === syrupId) || this.syrups[0];
    },
  },
  persist: false,
});
