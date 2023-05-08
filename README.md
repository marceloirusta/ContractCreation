
# Deel automation exercise

This automation project is focused on creating a fixed rate contract on the Deel platform with specific parameters as outlined in the exercise document. The automation framework is built using WebdriverIO and generates test reports using Allure. The project aims to streamline the contract creation process and minimize errors during manual contract creation.



## Installation

After cloning the repo, go to the project directory and install the project with npm

```bash
  npm install
```


## Running the project

After checking that the previous step has generated the dependencies properly, you should run the test with this command

```bash
npx wdio run ./wdio.conf.js  
```

## Generating the report

To check the report you should just run

```bash
npx allure generate allure-results --clean && npx allure open
```
     