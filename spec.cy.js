describe('template spec', () => {
  it('passes', () => {
   
    cy.visit('https://www.amazon.in/')                                   //Open amazon in the browser
    cy.get('.nav-search-field').click().type('dress{enter}')                   //Search for a "dress"
    
    cy.get('[data-component-id="4"]').click()
    //Select any "dress" from the search page
    
    cy.get('[id="native_dropdown_selected_size_name"]').select("S")
    //Go to the product detail page & select the size
    
    cy.get('[id="add-to-cart-button"]').click()                              //Click on “ADD TO CART”
    cy.get('[id="sw-gtc"]').click()                                           //Click on “GO TO CART”
    
    cy.log('Price', '[id="sc-subtotal-amount-buybox"]')
    cy.log('Quantity','[id="sc-subtotal-label-buybox"]')
    cy.get('[id="sc-subtotal-amount-buybox"]').should('have.class', 'a-color-price sc-price-container a-text-bold')
    cy.get('[id="sc-subtotal-label-buybox"]').should('have.class', 'a-size-medium sc-number-of-items')
    //Validate Order summary - Price & Quantity - Print & assert them
    
    cy.get('[id="sc-buy-box-ptc-button"]').click()                           //Click “Proceed to buy”
    
    cy.screenshot() 
  
  })
})