import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    profile: <any>null
  }),
  actions: {
    upProfile(data: any) {
      this.profile = data;
    }
  }
});
