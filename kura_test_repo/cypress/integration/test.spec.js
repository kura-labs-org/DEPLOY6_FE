describe('Heading', () => {
    it('has the right title', () => {
        // We need the ip address to run this 
        let ip_address = '3.140.208.112'

        cy.visit('http://3.140.208.112:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
