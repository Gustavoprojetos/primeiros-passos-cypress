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
    genericField: ".oxd-input",
    oxdSelectText: ".oxd-select-text",
    dateField:"[placeholder='yyyy-dd-mm']",
    closeButton:".--close",
    submmitButton:"[type='submit']"
    
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
    cy.get(selectorsList.genericField).eq(4).clear().type(userData.userInfo.employeeId) //Posição 4 do array de campos "eq(4)".
    cy.get(selectorsList.genericField).eq(5).clear().type(userData.userInfo.otherId)
    cy.get(selectorsList.genericField).eq(6).clear().type(userData.userInfo.DriversLicenseNumber)
    cy.get(selectorsList.dateField).eq(0).clear().type(userData.userInfo.lincenseData)
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.submmitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
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