var Person = require('../Person');
var should = require('should');

let person

describe('Array', function(){
  before(function(){
    person = new Person('p1', 'fakeStreet 1', '504921600');
  });

  describe('Person', function(){       
     context('when creating a new person', function(){
      it('should return the proper values', function(){
        person.getName().should.equal('p1');
        person.getFriends().length.should.equal(0);
        person.getAddress().should.equal('fakeStreet 1');
        (typeof person.getAge()).should.equal('number');
      });
    });
  });
});
