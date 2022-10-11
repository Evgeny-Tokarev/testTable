import { defineStore, type _DeepPartial } from "pinia";
import dataJson from "@/data/tableData.json";

export const useStore = defineStore({
  id: "table",
  state: () => {
    return {
      theme: "dark",
      data: dataJson.data,
    };
  },
  getters: {},
  actions: {},
});
