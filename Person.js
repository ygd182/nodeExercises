class Person {
    constructor (name, address, birth_date) {
        this.name = name;
        this.address = address;
        this.friends = [];
        this.birth_date = birth_date;
    }
    addFriend(friend) {
        this.friends.push(friend);
    }

    getFriends () { return this.friends; }
    getName() { return this.name; }
    getAddress() { return this.address; }
    getAge() { return Date.now() - this.birth_date; }
}

module.exports = Person;



