.groupBy will return an object, can each over results to display categories, or use .where to get items from each category "manually"

## Tasks

#### Getting Started
- [x] Setup the scaffolding and install backbone
- [x] Setup templates for the different dynamic portions of the application
- [x] Produce static data for the menu items
- [x] Produce a functional static mockup

#### Menu Items
- [x] Fetch and console.log the static JSON for the menu items
- [x] Render a template for each menu item, not according to category
- [x] Define a MenuItemListView constructor
- [x] Make a view instance responsible instead of just a template for the collection
- [x] Define a MenuItemItemView constructor
- [x] Use renderChildren method to render a child view for each Menu Item
- [x] console.log the food model when I click on the add button
- [x] Define an Order constructor
- [x] Create an instance of Order
- [x] Pass the Order to the child views
- [x] console.log the order when I click on the add button
- [x] Add the food model to the order
- [x] Define a MenuItemCategoryView view constructor
- [ ] Make instance of MenuItemCategoryView for each category, moving the 'renderChildren' method down a level.
- [ ] Make an instance of MenuItemCategoryView for popularity
      food.groupBy('category');
      (underscore).each(foods.groupBy('category'), function(foods, category){
        console.log(category, foods);
        });
        Returns category names with array of foods

#### Order view
- [x] Define an OrderView constructor
- [x] render an instance of OrderView
- [x] in OrderView, console.log the order
- [x] In OrderView, console.log a food model every time a food model is added to the order
- [x] Render the data from the order every time the order is updated
- [ ] In Order, define a subtotal function that calculates the total price.
- [x] console.log, then render, every time the order is updated

#### Order data
- [ ] save the order data to Parse when the order is submitted
