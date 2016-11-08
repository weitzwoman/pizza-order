// backend
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaCost;
}

PizzaOrder.prototype.cost = function() {
  if (this.size === 12) {
    this.pizzaCost = 12;
  } else if (this.size === 16) {
    this.pizzaCost = 16;
  } else {
    this.pizzaCost = 20;
  } for (var i = 0; i < this.toppings.length; i ++) {
    this.pizzaCost += 1.5;
  }
}

PizzaOrder.prototype.receiptStatement = function() {
  return "Your Pizza is: $" + this.pizzaCost;
};

// UI
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var inputSize = parseInt($("#size").val());
    var inputToppings = [];
    $("input:checkbox[name=toppingcheck]:checked").each(function(){
      inputToppings.push($(this).val());
    });

    var pizzaOrderPlaced = new PizzaOrder (inputSize, inputToppings);
    pizzaOrderPlaced.cost();
    $("#receipt").text(pizzaOrderPlaced.receiptStatement());
    $(".well").show();
  });
});
