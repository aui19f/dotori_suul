import { Category, Unit } from "@/components/enums/Brewery.enum";

export interface IMaterial {
  item: string;
  dose: number;
  unit: Unit;
}
export interface IHomeBreweryForm {
  title: string;
  category: Category;
  material: IMaterial[]; // 재료
  recipe: string[]; // 레시피
}
export interface IHomeBreweryOutput {
  id?: string;
  title: string;
  category: Category;
  material: IMaterial[]; // 재료
  recipe: string[]; // 레시피
  updatedAt: number; //1742385234622;
  createdAt: number; //1742385234622;
  userId: string;
}
