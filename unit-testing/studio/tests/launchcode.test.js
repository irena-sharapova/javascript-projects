// launchcode.test.js code:
const launchcode = require('../index.js');

describe("check launchcode object", function() {
  test ("check launchcode organization type", function() {
    expect(launchcode.organization).toEqual("nonprofit");

  });

  test ("check executiveDirector name", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");

  });

  test ("check percentageCoolEmployees value", function() {
    expect(launchcode.percentageCoolEmployees).toEqual("100");

  });

  test ("check property called programsOffered with 3 program", function() {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);

  });


  describe ("shoud have method launchOutput, which", function() {
    test ("shoud return 'Launch!' for numbers divisible by 2", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });

    test ("shoud return 'Code!' for numbers divisible by 3", function() {
      expect(launchcode.launchOutput(3)).toEqual("Code!");

    });

    test ("shoud return 'Rocks!' for numbers divisible by 3", function() {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });

     test ("shoud return 'LaunchCode!' for numbers divisible by 2 and 3", function() {
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });

    test ("shoud return 'Code Rocks!' for numbers divisible by 3 and 5", function() {
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });

    test ("shoud return 'Launch Rocks! (CRASH!!!!)' for numbers divisible by 2 and 5", function() {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    });

    test ("shoud return 'LaunchCode Rocks!' for numbers divisible by 2, 3  and 5", function() {
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });

    test ("shoud return 'Rutabagas! That doesn't work.' for numbers NOT divisible by 2, 3 or 5", function() {
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });

  });
 
});

