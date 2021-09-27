describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://172.31.42.192:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My E Application")
    });

});
