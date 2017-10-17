export interface MenuVariations {

}

export interface MenuItemsSelected  {
  name: string;
  price: number;
  options: { label: string, supplement: number }[];
}


export class  MenuItemsSelectedImpl implements MenuItemsSelected {
  name: string;
  price: number;
  options: {
    label: string;
    supplement: number;
  }[];

  constructor(name?: string, price?: number, options?: { label: string; supplement: number }[]) {
    this.name = name || null;
    this.price = price || null;
    this.options = options || null;
  }

  clone(): MenuItemsSelected {
    const clone = new MenuItemsSelectedImpl();
    clone.name = name;
    clone.price = this.price;
    clone.options = this.options.map(a => { return {label: a.label, supplement: a.supplement} });
    return clone;
  }
}





