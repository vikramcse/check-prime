var expect = require('chai').expect;
var isPrime = require('./index.js');

describe('Test for checking prime number', function () {
  it('the number should be prime', function () {
    expect(isPrime(7)).to.be.equal(true);
    expect(isPrime(97)).to.be.equal(true);
    expect(isPrime(2)).to.be.equal(true);
  });

  it('the number should not be prime', function () {
    expect(isPrime(1)).to.be.equal(false);
    expect(isPrime(88)).to.be.equal(false);
    expect(isPrime(12)).to.be.equal(false);
  });
});
