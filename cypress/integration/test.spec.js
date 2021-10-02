describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://3.86.50.174:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
