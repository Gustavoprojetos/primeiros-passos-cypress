class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".oxd-button",
            selectorAlertError: ".oxd-alert-content--error",
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    checkAccessInvalid() {
        cy.get(this.selectorsList().selectorAlertError)
    }
}
export default LoginPage