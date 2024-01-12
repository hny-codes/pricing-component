describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-8');
  });

  it('Should show results when toggling button switch', () => {
    // Get card prices
    cy.get('strong').eq(0).as('price-1');
    cy.get('strong').eq(1).as('price-2');
    cy.get('strong').eq(2).as('price-3');

    // Check for the container if it exists
    cy.get('[data-test="switch-container"]').should('exist');

    // Check if the switch exists, then click it
    cy.get('[data-test="switch"]').should('exist').as('switch');

    // Get annual card prices
    cy.get('@price-1').contains(199.99);
    cy.get('@price-2').contains(249.99);
    cy.get('@price-3').contains(399.99);

    // Toggle switch to change prices, then check card prices
    cy.get('@switch').click();
    cy.get('@price-1').contains(19.99);
    cy.get('@price-2').contains(24.99);
    cy.get('@price-3').contains(39.99);
  });
});
