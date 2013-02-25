/// <reference path="../src/ItemList.ts"/>
/// <reference path="../lib/jasmine.d.ts"/>

describe("ItemList", function() {

  var itemList;

  beforeEach(function() {
    itemList = new ItemList();
  });
  
  it("has no items by defaut", function() {
    expect(itemList.getItems().length).toBe(0);
  });
  
  it("when first item is added, it is at first place of the list", function() {
    itemList.add("foo");
    expect(itemList.getItems()[0]).toBe("foo");
  });
  
  it("when item is removed, it isn't in the list any more", function() {
    itemList.add("one");
    itemList.add("foo");
    itemList.add("two");    
    itemList.remove("foo");
    expect(itemList.getItems()).not.toContain("foo");
    expect(itemList.getItems()[0] + ", " + itemList.getItems()[1]).toBe("one, two");
  });
  
  it("when item is removed which was in the list, true is returned", function() {
    itemList.add("foo");
    expect(itemList.remove("foo")).toBeTruthy();
  });
});


