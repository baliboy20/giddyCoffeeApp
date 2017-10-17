import {MenuSundryOptions} from "./menu-sundry-options.model";

export interface MenuItem {
  name: string;
  price: number;
  options: MenuSundryOptions[];
  info: string;
  foodType: string;
}

