var _ = require('./bower_components/underscore/underscore.js');
var items = require('./items.json');

//Show me how to calculate the average price of all items. Please console.log the average.
var priceList = _.pluck(items, 'price');

var sum = priceList.reduce(function (a,b){
return a + b;
});

var avg = sum/(items.length);
var avgTimes = Math.round(avg*100);
var avgDivide = avgTimes/100;

console.log("The average price is $" + avgDivide + ".");

// Show me how to get an array of items that cost between $14.00 and $18.00 USD

var priceRange = _.filter(items, function(item){
  return item.price <= 17.99 && item.price >= 14.00;
});

var itemsInPriceRange = _.pluck(priceRange, 'title');
console.log("Items that cost between $14.00 USD and $18.00 USD:" + itemsInPriceRange);

// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

var priceInPounds = _.filter(items, function(item){
  return item.currency_code === "GBP";
});

var itemInPoundsTitle = _.pluck(priceInPounds, 'title');
var itemInPoundsPrice = _.pluck(priceInPounds, 'price');
console.log (itemInPoundsTitle + " costs £" + itemInPoundsPrice + ".");

// Show me how to find which items are made of wood. Please console.log the ones you find.

var wood = _.filter(items, function(item){
  if (_.contains(item.materials, "wood")){
    return true;
  }
});

var woodTitle = _.pluck(wood, 'title');
console.log (woodTitle + " is made of wood.");

// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

var size = _.filter(items, function(item){
  var materialsList = _.size(item.materials);
  if (materialsList > 8){
     return true;
  }
});

var sizeTitle = _.pluck(size, 'title');
var materialsList = _.pluck(size, 'materials');

console.log (sizeTitle + " has more than 8 materials " + materialsList);

// Show me how to calculate how many items were made by their sellers

var sellerMade = _.filter(items, function(item){
  return item.who_made === 'i_did';
});

var sellerMadeCount = sellerMade.length;

console.log(sellerMadeCount + " items were made by the seller! ");
