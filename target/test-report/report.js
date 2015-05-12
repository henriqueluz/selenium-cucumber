$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("br/com/atlantico/bdd/parking_calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Parking Calculator",
  "description": "As a customer \nIn order to pay my parking tax\nI want to calculate the cost",
  "id": "parking-calculator",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9383516490,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Calculate the daily rate",
  "description": "",
  "id": "parking-calculator;calculate-the-daily-rate",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@enabled"
    },
    {
      "line": 7,
      "name": "@start"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the customer starts the app",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the customer chooses \u0027EP\u0027 Lot",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the customer chooses the Entry date and time",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the customer chooses the Leaving date and time",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the customer chooses to calculate",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the system must show the total cost $28 of parking",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the time spent by the customer \u0027(1 Days, 0 Hours, 0 Minutes)\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "ParkingCalculatorSteps.givenTheCustomerStartsTheApp()"
});
formatter.result({
  "duration": 2428057386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EP",
      "offset": 22
    }
  ],
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesTheLot(String)"
});
formatter.result({
  "duration": 676058885,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesEntryDateAndTime()"
});
formatter.result({
  "duration": 952477736,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesLeavingDateAndTime()"
});
formatter.result({
  "duration": 422077301,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesToCalculate()"
});
formatter.result({
  "duration": 839121230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 37
    }
  ],
  "location": "ParkingCalculatorSteps.thenTheSystemMustShowTheTotalCostOfParking(double)"
});
formatter.result({
  "duration": 14647276843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(1 Days, 0 Hours, 0 Minutes)",
      "offset": 32
    }
  ],
  "location": "ParkingCalculatorSteps.theTimeSpenByTheCustomer(String)"
});
formatter.result({
  "duration": 121709291,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Calculate cost with a wrong leaving date",
  "description": "",
  "id": "parking-calculator;calculate-cost-with-a-wrong-leaving-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@enabled"
    },
    {
      "line": 18,
      "name": "@finish"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "the customer starts the app",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the customer chooses \u0027LTS\u0027 Lot",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the customer chooses the Entry date and time",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the customer chooses a Leaving date before Entry date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the customer chooses to calculate",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the system must show an error",
  "keyword": "Then "
});
formatter.match({
  "location": "ParkingCalculatorSteps.givenTheCustomerStartsTheApp()"
});
formatter.result({
  "duration": 3465464003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LTS",
      "offset": 22
    }
  ],
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesTheLot(String)"
});
formatter.result({
  "duration": 604371441,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesEntryDateAndTime()"
});
formatter.result({
  "duration": 414569293,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.whenTheUserChoosesALeavingDateBeforyEntryDate()"
});
formatter.result({
  "duration": 456313763,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.whenTheCustomerChoosesToCalculate()"
});
formatter.result({
  "duration": 952429439,
  "status": "passed"
});
formatter.match({
  "location": "ParkingCalculatorSteps.thenTheSystemMustShowError()"
});
formatter.result({
  "duration": 123601801,
  "status": "passed"
});
formatter.after({
  "duration": 115090095,
  "status": "passed"
});
});