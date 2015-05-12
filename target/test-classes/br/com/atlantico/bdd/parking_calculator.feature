Feature: Parking Calculator
	As a customer 
	In order to pay my parking tax
	I want to calculate the cost

@enabled
@start
Scenario: Calculate the daily rate
	Given the customer starts the app 
	When the customer chooses 'EP' Lot
	And the customer chooses the Entry date and time
	And the customer chooses the Leaving date and time
	And the customer chooses to calculate
	Then the system must show the total cost $28 of parking
	And the time spent by the customer '(1 Days, 0 Hours, 0 Minutes)'

@enabled
@finish
Scenario: Calculate cost with a wrong leaving date
	Given the customer starts the app
	When the customer chooses 'LTS' Lot
	And the customer chooses the Entry date and time
	And the customer chooses a Leaving date before Entry date
	And the customer chooses to calculate
	Then the system must show an error