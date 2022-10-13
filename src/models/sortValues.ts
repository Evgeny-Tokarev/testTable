import { type ColumnItems } from "@/models/filterValues"
export interface SortValues {
	column: ColumnItems | "date"
	type: SortTypes
}
export type SortTypes = "up" | "down" | ""
