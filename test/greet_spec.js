//var expect = require("chai").expect
var greet = require("greet")
describe('greet', function(){
  it("should greet a person by name", function() {
    expect(greet("kaeli")).to.eql("hello, kaeli");
  });

  it("should greet a person flirtatiously if drunk", function() {
    expect(greet("kaeli", true)).to.eql("hello kaeli, you look sexy today");
  });
});

var chai = require("chai");
chai.should();

describe('greet with "should" syntax', function() {
  it("should greet a person by name", function() {
  	result = greet("kaeli");
  	result.should.equal("hello, kaeli")
  });

  it("should greet a person flirtatiously if drunk", function() {
  	result = greet("kaeli", true);
  	result.should.equal("hello kaeli, you look sexy today")
  });
});
