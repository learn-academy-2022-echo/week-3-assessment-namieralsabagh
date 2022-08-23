// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
    const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
    describe( "newArray", () => {
        it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
         const fibLength1 = 6
           // Expected output: [1, 1, 2, 3, 5, 8]

        const fibLength2 = 10
          // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
     expect(newArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
     expect(newArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

     
    })
    })
        // ReferenceError: newArray is not defined

// b) Create the function that makes the test pass.

// PseudoCode:
// Create a function called newArray
// Set parameter to (num)
// Declare a variable named secArray
// Iterate through the array
// Utilize .push to add numbers to array

const newArray = (num) => {
    const secArray = [1,1];
     for(let i=2; i < num; i++){
        secArray.push(secArray[i-2] + secArray[i-1])
     }
     return secArray
}
//Test Suites: 1 passed, 1 total


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddLeast", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
            // Expected output: [-9, 7, 9, 199]   

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
        

        expect(oddLeast(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddLeast(fullArr2)).toEqual([-823, 7, 23])
    })
})
        // ReferenceError: oddLeast is not defined


// b) Create the function that makes the test pass.

// PseudoCode:
// Create a function called oddLeast
// Create const called lowArray
// Utilize .filter to iterate over the array and return the new array
// Create two arguments (least, most) and utilize .sort to sort from lowest to highest number 
// Return the new array

const oddLeast = (array) =>{
    const lowArray = array.filter (value => typeof
     value === "number" && value %2 !== 0
        ); lowArray.sort((least, most) => {return least - most})
        return lowArray
    }
     //Test Suites: 1 passed, 1 total


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("accSum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Expected output: [2, 6, 51, 60]

        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]

        const numbersToAdd3 = []
        // Expected output: []      

    expect(accSum(numbersToAdd1)).toEqual([2, 4, 45, 9])
    expect(accSum(numbersToAdd2)).toEqual([0, 7, -8, 12])
    expect(accSum(numbersToAdd3)).toEqual([])
    })
 })
     //    ReferenceError: accSum is not defined

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

// b) Create the function that makes the test pass.

//PsuedoCode:
// Create a function called accSum
// Declare a variable newSum and assign it to 0
// Utilize higher order function .map to map over and return array
// Utilize += to add values while iterating 

    const accSum = (array) => {
        let newSum = 0;
        return array.map(value => {
            return newSum += value
        })
    }

// b) Create the function that makes the test pass.
        //Test Suites: 1 failed, 1 total


   //I have tried thise countless different ways and cannot get it to pass. I have tried looking up solutions to help my thought process and cannot figure this out.  I keep getting the following error message on line 107; > 107 |     expect(accSum(numbersToAdd1)).toEqual([2, 4, 45, 9])
                                                                  

    //Thank you for looking these over, I definitely need help understanding this one. I don't know why it keeps flagging toEqual.
