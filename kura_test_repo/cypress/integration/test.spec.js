describe('Heading', () => {
    it('has the right title', () => {
        // We need the ip address to run this 
        let ip_address = Cypress.env(ip_addy)

        cy.visit(`http://${ip_address}:5000/example-1`)

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
