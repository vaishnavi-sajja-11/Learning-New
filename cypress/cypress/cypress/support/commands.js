
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const LOGINLOCATORS = require('../support/locators/login.js')
 

Cypress.Commands.add('login', (email) =>{
    cy.visit('https://www.amazon.com/');
    cy.get(LOGINLOCATORS.ACCOUNTSLISTBUTTON).click();
    cy.get(LOGINLOCATORS.EMAIL).type(email);

    cy.get(LOGINLOCATORS.CONTINUE_BUTTON).click();
    // cy.intercept('GET', 'https://m.media-amazon.com/images/G/01/csm/showads.v2.js?category=ad&adstype=-ad-column-&ad_size=-housead-').as('Loader');
    // cy.wait('@Loader', 60000 );
    // cy.pause()

})