describe('Horage HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    selectorTitleTopBar: ".oxd-topbar-header-breadcrumb",
    selectorAlertError: ".oxd-alert-content--error"
  }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.selectorTitleTopBar).contains('Dashboard')
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.selectorAlertError)
  })
}
)