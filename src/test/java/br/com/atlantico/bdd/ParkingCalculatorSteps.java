package br.com.atlantico.bdd;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ParkingCalculatorSteps {

	private static WebDriver browser;
	
	@Before("@start")
	public void setup() {
		browser = new FirefoxDriver();
		browser.manage().window().setPosition(new Point(200, 100));
	}
	
	@Given("^the customer starts the app$")
	public void givenTheCustomerStartsTheApp() {
		browser.navigate().to("http://adam.goucher.ca/parkcalc/");
		browser.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
	}

	@When("^the customer chooses '([^\"]*)' Lot$")
	public void whenTheCustomerChoosesTheLot(String lot) {
		WebElement lotSelectbox = browser.findElement(By.id("Lot"));
		List<WebElement> options = lotSelectbox.findElements(By.tagName("option"));
		lotSelectbox.click();

		for (WebElement option : options) {
			if(option.getAttribute("value").equals(lot)) {
				option.click();
			}
		}
	}

	@When("^the customer chooses the Entry date and time$")
	public void whenTheCustomerChoosesEntryDateAndTime() {
		WebElement entryTime = browser.findElement(By.id("EntryTime"));
		WebElement entryDate = browser.findElement(By.id("EntryDate"));
		entryTime.clear();
		entryDate.clear();
		entryTime.sendKeys("13:00");
		entryDate.sendKeys("01/09/2015");
	}

	@When("^the customer chooses the Leaving date and time$")
	public void whenTheCustomerChoosesLeavingDateAndTime() {
		WebElement leavingTime = browser.findElement(By.id("ExitTime"));
		WebElement leavingDate = browser.findElement(By.id("ExitDate"));
		leavingTime.clear();
		leavingDate.clear();
		leavingTime.sendKeys("13:00");
		leavingDate.sendKeys("01/10/2015");
	}

	@When("^the customer chooses to calculate$")
	public void whenTheCustomerChoosesToCalculate() {
		WebElement calculate = browser.findElement(By.name("Submit"));
		calculate.click();
	}
	
	@Then("^the system must show the total cost \\$(\\d+) of parking$")
	public void thenTheSystemMustShowTheTotalCostOfParking(double cost) {
		String currencyCost = "$ " + cost + "0";
		WebElement result = browser.findElements(By.cssSelector(".SubHead")).get(1);
		Assert.assertEquals(result.getText(), currencyCost);
	}

	@Then("^the time spent by the customer '([^\"]*)'$")
	public void theTimeSpenByTheCustomer(String timeSpent) {
		WebElement result = browser.findElement(By.cssSelector("span.BodyCopy"));
		Assert.assertEquals(result.getText().trim(), timeSpent);
	}
	
	@When("^the customer chooses a Leaving date before Entry date$")
	public void whenTheUserChoosesALeavingDateBeforyEntryDate() {
		WebElement leavingTime = browser.findElement(By.id("ExitTime"));
		WebElement leavingDate = browser.findElement(By.id("ExitDate"));
		leavingTime.clear();
		leavingDate.clear();
		leavingTime.sendKeys("13:00");
		leavingDate.sendKeys("01/01/2015");
	}
	
	@Then("^the system must show an error$")
	public void thenTheSystemMustShowError() {
		WebElement result = browser.findElement(By.cssSelector("span.SubHead"));
		Assert.assertTrue(result.getText().contains("ERROR!"));
	}
	
	@After("@finish")
	public void tearDown() {
		browser.quit();
	}
	
}
