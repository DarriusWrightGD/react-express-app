jest.unmock('../../../../src/shared/components/GroceryItem');
import GroceryItem from '../../../../src/shared/components/GroceryItem';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('GroceryItem module', ()=>{

  describe('item purchased', ()=>{
    let item;
    let groceryItem;
    beforeEach(()=>{
      item = {
        id: "1",
        name: "Foobar",
        purchased: true
      }


    });

    it('should contain unbuy option', ()=>{
      console.log(TestUtils);
      let groceryItem = TestUtils.renderIntoDocument(
        <GroceryItem item={item}/>
      );
      console.log(groceryItem);
      var button = TestUtils.findRenderedDOMComponentWithClass(groceryItem,'grocery-item row');
      expect(button.textContent).toEqual('Unbuy');
    });
  });

  describe('item not purchased', ()=>{
    it('should contain buy option', ()=>{

    });
  });
});
