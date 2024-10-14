class menutest {
    get fish() {
      return cy.get('tbody > :nth-child(2) > :nth-child(2)')
    }
    // Action
    verifyfish() {
      this.fish.should('have.text', 'Angelfish');
    }

    get Dogs() {
        return cy.get('tbody > :nth-child(2) > :nth-child(2)')
      }
      // Action
      verifyDogs() {
        this.Dogs.should('have.text', 'Bulldog');
      }

    get Cats() {
        return cy.get('tbody > :nth-child(2) > :nth-child(2)')
      }
      // Action

      verifyCats() {
        this.Cats.should('have.text', 'Manx');
      }

    get Reptiles() {
        return cy.get('tbody > :nth-child(2) > :nth-child(2)')
      }
      // Action
      verifyReptiles() {
        this.Reptiles.should('have.text', 'Rattlesnake');
      }

    get Birds() {
        return cy.get('tbody > :nth-child(2) > :nth-child(2)')
      }
      // Action
      verifyBirds() {
        this.Birds.should('have.text', 'Amazon Parrot');
      }
  }
  export default new menutest();