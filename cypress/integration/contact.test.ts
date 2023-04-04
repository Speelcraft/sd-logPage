describe('Contact us page', () => {
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('example').then(data => {
            this.data = data;
        })
    })

    it('Validate contact us redirection', () => {
        cy.accessContactUsPage()
        .url()
        .should('be.equal', 'https://www.sardine.ai/contact');
    })

    it('Validate invalid email format message', () => {
        cy.accessContactUsPage();
        cy.inputEmail(this.data.email1);
        cy.invalidEmailMessage()
        .should('have.text', 'Email must be formatted correctly.');
    })

    it('Validate invalid email provider message', () => {
        cy.accessContactUsPage();
        cy.inputEmail(this.data.email2);
        cy.invalidEmailMessage()
        .should('have.text', 'Please enter your business email address. This form does not accept addresses from test.com.');
    })    
})