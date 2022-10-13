export interface FilterValues {
  column: ColumnItems;
  condition: ConditionItems;
  value: string;
}

export type ConditionItems = "equals" | "contains" | "greater" | "less" | "";

export type ColumnItems = "title" | "quantity" | "distance" | "";
