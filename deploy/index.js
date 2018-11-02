const { Builder, By, until: Until } = require('selenium-webdriver')

const { config } = require('./config')
;(async function() {
  const driver = await new Builder().forBrowser('chrome').build()
  const {
    url,
    username,
    password,
    selectors: {
      loginText,
      loginForm,
      usernameInputField,
      passwordInputField,
      loginButton,
    },
  } = config

  try {
    await driver.get(url)

    await driver.wait(Until.elementLocated(By.css(loginText)))
    await driver.findElement(By.css(loginText)).click()

    await driver.wait(Until.elementLocated(By.css(loginForm)))
    await driver.findElement(By.css(usernameInputField)).sendKeys(username)
    await driver.findElement(By.css(passwordInputField)).sendKeys(password)
    await driver.findElement(By.css(loginButton)).click()

    // this will only appear when successfully logged in
    await driver.wait(Until.elementLocated(By.css('li.nav-item.menu')))

    await driver.wait(Until.elementLocated(By.css('asdfasdfasdf')))
  } finally {
    await driver.quit()
  }
})()
