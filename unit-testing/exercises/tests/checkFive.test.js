const checkFive = require('../checkFive.js');


describe("checkFive", function(){

    test("First descriptive feedback...", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
     });

    test("Second descriptive feedback...", function(){
        let output = checkFive(10);
        expect(output).toEqual("10 is greater than 5.");
     }); 
    
     test("Third descriptive feedback...", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
     }); 






});