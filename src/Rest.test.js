const {RestNumber} = require ('./Rest.js')

describe("Rest a Number", () =>{
    it("Rest two Numbers", ()=>{
        const number1 = 1
        const number2 = 1
        const result = RestNumber(number1,number2)
        expect(result).toEqual(0);
    })
})

