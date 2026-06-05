import userData from '../fixtures/users/userData.json'

describe('Horage HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardGrid: ".orangehrm-dashboard-grid",
    selectorAlertError: ".oxd-alert-content--error",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    employeeIdField: ".oxd-input",
  }



  it.only('User Info Update Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type(userData.userInfo.firstName)
    cy.get(selectorsList.lastNameField).clear().type(userData.userInfo.lastName)
    cy.get(selectorsList.employeeIdField).eq(4).clear().type(userData.userInfo.employeeId) //Posição 4 do array de campos "eq(4)".

  })

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.selectorAlertError)
  })
}
)