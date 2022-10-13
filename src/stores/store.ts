import { defineStore, type _DeepPartial } from "pinia"
import dataJson from "@/assets/data/tableData.json"
import { FilterValues } from "@/models/filterValues"
import { SortValues } from "@/models/sortValues"
import { TableData } from "@/models/tableData"

export const useStore = defineStore({
	id: "table",
	state: () => {
		return {
			theme: "dark",
			data: dataJson.data as TableData[],
			filter: { column: "", condition: "", value: "" } as FilterValues,
			sort: { column: "", type: "" } as SortValues,
		}
	},
	getters: {},
	actions: {},
})
