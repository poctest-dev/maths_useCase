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


Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});

