
// rite the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function and make the test pass.

describe("coffee", () => {
    test("return drink coffee or keep working", () => {
        expect(coffee("tired")).toBe("drink coffee")
        expect(coffee("not tired")).toBe("keep working")
    })
    test("chcking for edge cases", () => {
        expect(coffee(1)).toBe('please enter tired or not tired')
    })
})

const coffee = (string) => {
    if(string === "tired"){
        return `drink coffee`
    } else if(string === "not tired") {
        return `keep working`
    } else {
        return `please enter tired or not tired`
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function and make the test pass.

describe("relaxation", () => {
    test("return relaxed for stressed and keep going if relaxed", () => {
        expect(relaxation("relaxed")).toBe("keep going")
        expect(relaxation("stressed")).toBe("relax")
    })
    test("chcking for edge cases", () => {
        expect(relaxation(1)).toBe('please enter relaxed or stressed')
    })
})

const relaxation = (string) => {
    if(string === "relaxed"){
        return `keep going`
    } else if(string === "stressed") {
        return `relax`
    } else {
        return `please enter relaxed or stressed`
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function and make the test pass.
describe("budgetCheck", () => {
    test("checks if the price is more than 300", () => {
        expect(budgetCheck(305)).toBe("Not in budget")
        expect(budgetCheck(250)).toBe("in budget")
    })
    test("chcking for edge cases", () => {
        expect(budgetCheck("asdasd")).toBe('please enter a number')
    })
})

const budgetCheck = (num) => {
    if (num > 300) {
        return "Not in budget"
    } else if (num < 300) {
        return "in budget"
    } else {
        return "please enter a number"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function and make the test pass.
describe("smallNum", () => {
    test("return the smallest number between 2 arguments", () => {
        expect(smallNum(5,3)).toBe(3)
        expect(smallNum(1,7)).toBe(1)
    })
    test("chcking for edge cases", () => {
        expect(smallNum("asdasd")).toBe('please enter 2 numbers')
    })
})

const smallNum = (a,b) => {
    if (a > b) {
        return b
    } else if (a < b) {
        return a
    } else {
        return "please enter 2 numbers"
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function and make the test pass.
describe("findOdd", () => {
    test("find out if a number is odd or not", () => {
        expect(findOdd(10)).toBe("even")
        expect(findOdd(7)).toBe("odd")
    })
    test("checking for edge cases", () => {
        expect(findOdd("asdasd")).toBe('please enter a number')
    })
})

const findOdd = (a) => {
    if (typeof a === "number" && a%2 === 0) {
        return "even"
    } else if (typeof a === "number" && a%2 !== 0) {
        return "odd"
    } else {
        return 'please enter a number'
    }
}

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function and make the test pass.

describe("fruitColor", () => {
    test("return the color of the fruit entered", () => {
        expect(fruitColor("banana")).toBe("yellow")
        expect(fruitColor("apple")).toBe("red")
        expect(fruitColor("grape")).toBe("purple")
    })
    test("checking for edge cases", () => {
        expect(fruitColor(5)).toBe('please enter a fruit')
    })
})

const fruitColor = (a) => {
    if(a === "banana") {
        return "yellow"
    } else if (a === "apple") {
        return "red"
    } else if (a === "grape"){
        return 'purple'
    } else{
        return "please enter a fruit"
    }
}

// Write the test for a function called Rick that returns "Morty". Write the function and make the test pass.

describe("rick", () => {
    test("return the color of the fruit entered", () => {
        expect(rick()).toBe("Morty")
    })
})

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function and make the test pass.

describe("greeter", () => {
    test("return Hello + the name capitalized", () => {
        expect(greeter("banana")).toBe("Hello Banana")
        expect(greeter("lior")).toBe("Hello Lior")
        expect(greeter("Paige")).toBe("Hello Paige")

    })
    test("checking for edge cases", () => {
        expect(greeter(5)).toBe('please enter a name')
    })
})

const greeter = (name) => {
    if (typeof name !== "string") {
        return "please enter a name"
    } else {
        let x = name.charAt(0).toUpperCase() + name.substring(1)
        return `Hello ${x}`
    }
}
// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function and make the test pass.

describe("oddOrEven", () => {
    test("find out if a number is odd or not", () => {
        expect(oddOrEven(10)).toBe("even")
        expect(oddOrEven(7)).toBe("odd")
    })
    test("checking for edge cases", () => {
        expect(findOdd("asdasd")).toBe('please enter a number')
    })
})

const oddOrEven = (a) => {
    if (typeof a === "number" && a%2 === 0) {
        return "even"
    } else if (typeof a === "number" && a%2 !== 0) {
        return "odd"
    } else {
        return 'please enter a number'
    }
}

// Write the test for a function called double that takes an number as an argument and returns the result of that number multiplied by 2. Write the function and make the test pass.
describe("double", () => {
    test("returns the number given times two", () => {
        expect(double(10)).toBe(20)
        expect(double(7)).toBe(14)
    })
    test("checking for edge cases", () => {
        expect(double("asdasd")).toBe('please enter a number')
    })
})

const double = (a) => {
    if (typeof a !== "number") {
        return "please enter a number"
    }else{
        return a*2
    }
}
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function and make the test pass.
describe("multiply", () => {
    test("returns the 2 numbers multiplied by each other", () => {
        expect(multiply(10,2)).toBe(20)
        expect(multiply(7,5)).toBe(35)
        expect(multiply(6,4)).toBe(6*4)
    })
    test("checking for edge cases", () => {
        expect(multiply("asdasd","secondstring")).toBe('please enter 2 numbers')
        expect(multiply(1 ,"sdasd")).toBe('please enter 2 numbers')
        expect(multiply("asdasd",2)).toBe('please enter 2 numbers')
    })
})

const multiply = (a,b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return "please enter 2 numbers"
    }else{
        return a*b
    }
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function and make the test pass.
describe("divisibleBy", () => {
    test("returns the 2 numbers divided by each other", () => {
        expect(divisibleBy(10,2)).toBe("10 is evenly divisible by 2")
        expect(divisibleBy(7,5)).toBe("7 is not evenly divisible by 5")
        expect(divisibleBy(6,4)).toBe("6 is not evenly divisible by 4")
    })
    test("checking for edge cases", () => {
        expect(divisibleBy("asdasd","secondstring")).toBe('please enter 2 numbers')
        expect(divisibleBy(1 ,"sdasd")).toBe('please enter 2 numbers')
        expect(divisibleBy("asdasd",2)).toBe('please enter 2 numbers')
    })
})

const divisibleBy = (a,b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return "please enter 2 numbers"
    }else if(a%b === 0){
        return `${a} is evenly divisible by ${b}`
    } else {
        return `${a} is not evenly divisible by ${b}`
    }
}
// Consider this variable: var product = { name: "chair", price: 14.99 } Write the test for a function called describeProduct takes product as an argument and returns "The product is a chair. It costs $14.99". Write the function and make the test pass.

describe("productCheck", () => {
    let chair = {name: "chair" , price: 14.99}
    let couch = {name: "couch" , price: 1700}
    test("returns the 2 numbers divided by each other", () => {
        expect(productCheck(chair)).toBe("The product is a chair. It costs $14.99")
        expect(productCheck(couch)).toBe("The product is a couch. It costs $1700")
    })
    test("checking for edge cases", () => {
        expect(productCheck(1)).toBe('please enter a product')
    })
})

const productCheck = (product) => {
    if (typeof product.name !== "string" || typeof product.price !== "number" ) {
        return "please enter a product"
    } else {
        return `The product is a ${product.name}. It costs $${product.price}`
    }
}
