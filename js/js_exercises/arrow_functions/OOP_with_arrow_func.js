class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout( () => {
            console.log('Arrow: ' + this.name + " - Using arrow func.")
        }, 100);
    }

    printNameFunction() {
        setTimeout( function() {
            console.log('Function: ' + this.name + " - Using conventional func.")
        }, 100);
    }
}

let person = new Person('Bob')
console.log(this.name)
person.printNameArrow()
person.printNameFunction()
