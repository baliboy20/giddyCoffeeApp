

import {MenuSundryOptions} from "./menu-sundry-options.model";

export class MenuItemImpl {
  get options(): MenuSundryOptions[] {
    return this._options;
  }
  constructor(options: MenuSundryOptions[], info: string, name: string, price: number, foodType: string) {
    this._options = options;
    this._info = info;
    this._name = name;
    this._price = price;
    this._foodType = foodType;
  }

  set options(value: MenuSundryOptions[]) {
    this._options = value;
  }

  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get foodType(): string {
    return this._foodType;
  }

  set foodType(value: string) {
    this._foodType = value;
  }
  private _options: MenuSundryOptions[];
  private _info: string;
  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
  private _name: string;
  private _price: number;
  private _foodType: string;

}




