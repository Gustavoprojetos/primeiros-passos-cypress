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

    personalAnyName(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
}
export default MyInfo