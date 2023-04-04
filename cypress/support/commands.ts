import "cypress-xpath";

declare global {
    namespace Cypress {
      interface Chainable {
        getIframe(): any;
        accessContactUsPage(): Chainable<void>;
        inputEmail(email: string): Chainable<void>;
        invalidEmailMessage(): Chainable<void>;
        //safeLogin(email: string, password: string): Chainable<void>;
        //parseXlsx(inputFile: any): any;
      }
    }
  }

Cypress.Commands.add('getIframe' as any, () => {
    cy.get('#hs-form-iframe-0').then(function ($iframe) {
        const $body = $iframe.contents().find('body');
        return cy.wrap($body);
    })
  })

Cypress.Commands.add('accessContactUsPage', () => {
    cy.get('div[class="Nav_rightLinks__fY9U7"]')
    .find('[href="/contact"]')
    .click();
})

Cypress.Commands.add('inputEmail', (email: string) => {
    cy.getIframe()
    .find('#email-37339575-43b9-4647-8210-88a4ababac74')
    .type(email);
})

Cypress.Commands.add('invalidEmailMessage', () => {
    cy.getIframe()
    .find('.hs_email')
    .find('.hs-error-msg');
})