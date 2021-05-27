const { Given, When, Then } = require("@cucumber/cucumber");
module.exports = {
  default: `--publish --format-options '{"snippetInterface": "synchronous"}'`,
}
const assert = require("assert").strict;

Given("a variable set to {int}", function (number) {
  this.setTo(number);
  
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

When('I decrement the variable by {int}', function (number) {
  this.decrementBy(number);
  });

  When('I multiply the variable by {int}', function (number) {
    this.multiplyBy(number);
});


When('I divide the variable by {int}', function (number) {
  this.divideBy(number);
});



Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});

