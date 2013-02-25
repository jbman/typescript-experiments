/// <reference path="Item.ts"/>

class ItemList {

	items: any[] = [];

  add(item: any) {
    this.items.push(item);
  }
  
  indexOf(item: any) : number {
    // Array.indexOf only present in IE as of as of IE9
    return this.items.indexOf(item);
  }
  
  remove(item: any) : bool {
    var index = this.indexOf(item);
    if (index != -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
  
  
  public getItems() : any[] {
    return this.items;
  }
  
}
