import { Before, When, Then, Given } from 'cypress-cucumber-preprocessor/steps'

    const url = "http://qalab.pl.tivixlabs.com/"
    const modelInput = "#model"
    const btnPrimary = ".btn-primary"
    const searchResults = "#search-results"
    const alertDangerField = ".alert-danger"
    const rentButton = ".btn-success"

Before(() => {
    cy.visit(url)
})

When('user click Search button', ()=> {
    cy.get(btnPrimary)
        .contains('Search')
        .click()
})

// do you like switch/case? I know it takes readability but reduces copypaste
When('user select {string} in {string} dropdown', (selectedValue, selectorId) => {
    switch (selectorId) {
        case 'country':
            selectorId = '#country'
            break
        case 'city':
            selectorId = '#city'
            break
    }
    cy.get(selectorId)
        .select(selectedValue)
})

When('user type {string} model', (selectedModel) => {
    cy.get(modelInput)
        .type(selectedModel)
})

When('user enter {string} {string} date | format is YYYY-MM-DD', (selectedDate, selectorId) => {
    switch (selectorId) {
        case 'pickup':
            selectorId = '#pickup'
            break
        case 'dropoff':
            selectorId = '#dropoff'
            break
    }
    cy.get(selectorId)
        .type(selectedDate)
})

Then('{string} dropdown value is {string}',  (selectorId, selectedValue) => {
    switch (selectorId) {
        case 'country':
            selectorId = '#country'
            break
        case 'city':
            selectorId = '#city'
            break
    }
    cy.get(selectorId)
        .should('contain', selectedValue)

})

Then('model value is {string}', (selectedModel) => {
    cy.get(modelInput)
    .invoke('attr', 'value')
    .should('contain', selectedModel)
})

Then('{string} date value is {string}',  (selectorId, selectedDate) => {
    switch (selectorId) {
        case 'pickup':
            selectorId = '#pickup'
            break
        case 'dropoff':
            selectorId = '#dropoff'
            break
    }
    cy.get(selectorId)
        .invoke('attr', 'value')
        .should('contain', selectedDate)
})

Then('search results are displayed', () => {
    cy.get(searchResults)
})

Then('Please enter a valid date! error is displayed', () => {
    cy.get(alertDangerField)
        .contains('Please enter a valid date!')
})

When('user click first Rent car button on list', ()=> {
    cy.get(rentButton)
        .first()
        .click()
})

When('user click {string} button', (buttonLabel)=> {
    cy.get(btnPrimary)
        .contains(buttonLabel)
        .click()
})

//yes here I should put it into separate class as /rent/ (and car details also) site is different, but I repeat myself here, lack of time
When('user type {string} in {string} field | Summary site', (selectedValue, selectorId) => {
    switch (selectorId) {
        case 'name':
            selectorId = '#name'
            break
        case 'last_name':
            selectorId = '#last_name'
            break
        case 'card_number':
            selectorId = '#card_number'
            break
        case 'email':
            selectorId = '#email'
            break
    }
    cy.get(selectorId)
        .type(selectedValue)
})