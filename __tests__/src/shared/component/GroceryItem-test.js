import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GroceryItem from 'src/shared/components/GroceryItem';
import _ from 'lodash';

describe('GroceryItem module', ()=>{
  let item = {
    _id: "1",
    name: "Foobar",
  };
  let groceryItem;

  let renderComponent = (props)=>{
    groceryItem = TestUtils.renderIntoDocument(<GroceryItem {...props}/>);
  }

  describe('item purchased', ()=>{
    beforeEach(()=>{
      item.purchased = true
      renderComponent({item});
    });

    it('should contain unbuy option', ()=>{
      var button = TestUtils.findRenderedDOMComponentWithClass(groceryItem,'button-primary');
      expect(button.textContent).to.equal('Unbuy');
    });
  });

  describe('item not purchased', ()=>{
    beforeEach(()=>{
      item.purchased = false;
      renderComponent({item});
    });

    it('should contain buy option', ()=>{
      let buttons = TestUtils.scryRenderedDOMComponentsWithTag (groceryItem,'button');

      let buyButton = _.find(buttons, (button)=> {
       return button.textContent === 'Buy'
      });

      expect(buyButton).to.be.ok;
    });
  });

  describe('buy button clicked on item', ()=>{
    let updateItem;
    beforeEach(()=>{
      updateItem = sinon.spy();
    });

    it('should toggle item purchased to true when false, and call update', ()=>{
      item.purchased = false;
      renderComponent({item,updateItem});
      let buttons = TestUtils.scryRenderedDOMComponentsWithTag (groceryItem,'button');

      let buyButton = _.find(buttons, (button)=> {
       return button.textContent === 'Buy'
      });

      TestUtils.Simulate.submit(buyButton);
      expect(item.purchased).to.be.true;
      expect(updateItem.called).to.be.true;
    });

    it('should toggle item purchased to false when true, call update', ()=>{
      item.purchased = true;
      renderComponent({item, updateItem})

      let unbuyButton = TestUtils.findRenderedDOMComponentWithClass(groceryItem,'button-primary');
      TestUtils.Simulate.submit(unbuyButton);
      expect(item.purchased).to.be.false;
      expect(updateItem.called).to.be.true;
    });
  });

  describe('X button clicked calls remove', ()=>{
    let removeItem;

    beforeEach(()=>{
      removeItem = sinon.spy();
      item.purchased = false;
      renderComponent({item,removeItem});
    });

    it('should call remove when x button clicked', ()=>{
      let buttons = TestUtils.scryRenderedDOMComponentsWithTag(groceryItem, 'button');
      let removeButton = _.find(buttons, (button)=>{
        return button.textContent === '\xD7';
      });

      TestUtils.Simulate.submit(removeButton);
      expect(removeItem.called).to.be.true;
    });
  })
});
