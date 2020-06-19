Pizza.prototype.priceAdj = function() {
  let pizzaPrice;
  if (pizzaPrice = 10) {
    if (this.size === "Small") {
      pizzaPrice -= 1;
    } else if (this.size === "Large"){
      pizzaPrice += 1;
    } else if (this.size === "medium" ){
      pizzaPrice -= 0;
    }


function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();
  });
});
