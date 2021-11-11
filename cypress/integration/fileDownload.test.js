it('downloads a file', () => {
  cy.visit('https://testfiledownload.com/')

  cy.get('#onesignal-slidedown-cancel-button')
    .click()

  cy.contains('h3', '100KB (Micro File)')
    .parent()
    .find('a')
    .click()

  cy.readFile('cypress/downloads/test100k.db')
    .should('exist')
})
