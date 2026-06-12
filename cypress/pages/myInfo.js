class MyInfo {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            oxdSelectText: ".oxd-select-text",
            dateField: ".oxd-date-input",
            closeButton: ".--close",
            submmitButton: "[type='submit']",
            genericDropdown: ".oxd-select-text--active"
        }
        return selectors
    }

    fillPersonalDatails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDatails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate, nationaly, maritalStatus) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId) //Posição 4 do array de campos "eq(4)".
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().genericDropdown).eq(0).click({ force: true })
        cy.contains(nationaly).click();
        cy.get(this.selectorsList().genericDropdown).eq(1).click()
        cy.contains(maritalStatus).click();
    }

    saveForm() {
        cy.get(this.selectorsList().submmitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}
export default MyInfo