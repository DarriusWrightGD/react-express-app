jest.unmock('../../../../src/shared/components/GroceryItem');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GroceryItem from '../../../../src/shared/components/GroceryItem';

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
      var groceryItem = TestUtils.renderIntoDocument(<GroceryItem item={item}/>);
      var button = TestUtils.findRenderedDOMComponentWithClass(groceryItem,'button-primary');
      expect(button.textContent).toEqual('Unbuy');
    });
  });

  describe('item not purchased', ()=>{
    it('should contain buy option', ()=>{

    });
  });
});
