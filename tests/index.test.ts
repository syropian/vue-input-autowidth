describe('vue-input-autowidth', () => {
  it('should set the correct initial width on the input', () => {
    cy.visit('/sandbox/')
    cy.get('input')
      .first()
      .invoke('css', 'width')
      .then(width => parseInt(width.toString(), 10))
      .should('be.closeTo', 349, 2)
  })

  it('should set the correct width when the contents change', () => {
    cy.visit('/sandbox/')
    cy.get('input')
      .first()
      .type('Hello from Cypress!')
      .invoke('css', 'width')
      .then(width => parseInt(width.toString(), 10))
      .should('be.closeTo', 188, 2)
  })

  it("should reset to the width of the input's placeholder", () => {
    cy.visit('/sandbox/')
    cy.get('input')
      .first()
      .type('Hello from Cypress!')
      .clear()
      .invoke('css', 'width')
      .then(width => parseInt(width.toString(), 10))
      .should('be.closeTo', 349, 2)
  })

  it('should set the min/max with if the minWidth/maxWidth options are passed', () => {
    cy.visit('/sandbox/')
    cy.get('input').eq(1).should('have.css', 'min-width', '75px').should('have.css', 'max-width', '100px')
  })

  it('should add extra space if the comfortZone option is passed', () => {
    cy.visit('/sandbox/')
    cy.get('input')
      .eq(2)
      .invoke('css', 'width')
      .then(width => parseInt(width.toString(), 10))
      .should('be.closeTo', 359, 2)
  })

  it('it works without v-model', () => {
    cy.visit('/sandbox/')
    cy.get('input')
      .eq(3)
      .type('Hello from Cypress!')
      .invoke('css', 'width')
      .then(width => parseInt(width.toString(), 10))
      .should('be.closeTo', 188, 2)
  })
})
