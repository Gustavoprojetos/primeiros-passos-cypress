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

  it('User Info Update Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboarPage.checkDashboarPage()
    menuPage.accessMyiInfo()
    myInfo.fillPersonalDatails("Luiz", "Gustavo")
    myInfo.fillEmployeeDatails("employeeId", "otherId", "DriversLicenseNumber", "2026-05-12", "Brazilian", "Married")
    myInfo.saveForm()
  })

  it.only('Login Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
}
)