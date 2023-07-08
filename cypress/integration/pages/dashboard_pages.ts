export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    link_sauceLabsBikeLight = 'Sauce Labs Bike Light'
    link_sauceLabsBoltTshirt = 'Sauce Labs Bolt T-Shirt'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    sauceLabsBikeLight(){
        cy.contains(this.link_sauceLabsBikeLight).click()
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
    }

    sauceLabsBoltTshirt(){
        cy.contains(this.link_sauceLabsBoltTshirt).click()
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible') 
    }
}