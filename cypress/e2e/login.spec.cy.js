describe('Horage HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardGrid: ".orangehrm-dashboard-grid",
    selectorAlertError: ".oxd-alert-content--error"
  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },

    userFail: {
      username: 'Test',
      password: 'Test'
    }
  }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.selectorAlertError)
  })
}
)