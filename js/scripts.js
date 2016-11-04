// backend
function PizzaOrder(size, toppings) {
  this.size = "";
  this.toppings = [];
  this.pizzaCost;
}
console.log(PizzaOrder);

PizzaOrder.prototype.cost = function() {

  this.pizzaCost = 12;
  if (this.size === "Large") {
    this.pizzaCost += 4;
  } else if (this.size === "XLarge") {
    this.pizzaCost += 8;
  }
  for (var i = 1; i < this.toppings.length; i ++) {
    this.pizzaCost += .5;
  }
// return pizzaCost;
  console.log(this.pizzaCost);
}

PizzaOrder.prototype.receiptStatement = function() {
  return "Your Pizza is: $" + this.pizzaCost;
}

// UI
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var pizzaOrderPlaced = new PizzaOrder;
    console.log(pizzaOrderPlaced);

    var inputSize = $("select#size").val();
    console.log(inputSize);

    var inputToppings = [];
    $("input:checkbox[name=toppingcheck]:checked").each(function(){
      inputToppings.push($(this).val());
    });
    console.log(inputToppings);

    pizzaOrderPlaced.cost();
    console.log(pizzaOrderPlaced);

    $("#receipt").text(pizzaOrderPlaced.receiptStatement());

  });
});
