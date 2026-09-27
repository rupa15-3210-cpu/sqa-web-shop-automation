# SQA Web Shop Project

## Project Overview

This is a web shop automation and API testing project.

I used Playwright to test the web shop website. I used Page Object Model (POM) to organize my test files.

I also used Postman and Newman for API testing.

## Technologies Used

- JavaScript
- Playwright
- Postman
- Newman
- Allure
- GitHub

## UI Tests

I created 3 UI test cases:

- Invalid Login
- Register and Add Product to Cart
- Product Search E2E

## API Tests

I created 3 API tests:

- Get All Users
- Get User ID
- Update User

## How to Run UI Tests

Open the project folder in VS Code.

Run all UI tests:

`npx playwright test --workers=1`

Open the HTML report:

`npx playwright show-report`

## How to Run API Tests

Run the API tests using Newman:

`newman run api-tests/Part-C-API-Tests-New.json`

## Reports

Playwright HTML Report:

`npx playwright show-report`

Allure Report:

`allure generate allure-results --clean -o allure-report`

Open Allure Report:

`allure open allure-report`

## GitHub Repository

https://github.com/rupa15-3210-cpu/sqa-web-shop-automation
