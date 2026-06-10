import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'

const loginPage = new LoginPage()
const dashboarPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new MyInfo()

describe('Horage HRM Tests', () => {

  const selectorsList = {

    dashboardGrid: ".orangehrm-dashboard-grid",


    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    oxdSelectText: ".oxd-select-text",
    dateField: ".oxd-date-input",
    closeButton: ".--close",
    submmitButton: "[type='submit']",
    genericDropdown: ".oxd-select-text--active"
  }

  it.only('User Info Update Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboarPage.checkDashboarPage()
    menuPage.accessMyiInfo()
    myInfo.personalAnyName("Luiz", "Gustavo")
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.dashboardGrid)
    // cy.get(selectorsList.myInfoButton).click()

    // cy.get(selectorsList.firstNameField).clear().type("firstNameTest  ")
    // cy.get(selectorsList.lastNameField).clear().type("lastNameTest")
    // cy.get(selectorsList.genericField).eq(4).clear().type("employeeId") //Posição 4 do array de campos "eq(4)".
    // cy.get(selectorsList.genericField).eq(5).clear().type("otherId")
    // cy.get(selectorsList.genericField).eq(6).clear().type("DriversLicenseNumber")
    // cy.get(selectorsList.dateField).eq(0).clear().type("2026-21-03")
    // cy.get(selectorsList.closeButton).click()

    // cy.get(selectorsList.genericDropdown).eq(0).click({force: true})
    // cy.contains('Brazilian').click();
    // cy.get(selectorsList.genericDropdown).eq(1).click()
    // cy.contains('Married').click();

    // cy.get(selectorsList.submmitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
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