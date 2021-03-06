Given('I open Webdriveruniversity page', () => {
    cy.visit('http://www.webdriveruniversity.com/');
});

When('I type in', (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.get('[name="email"]').focus().clear().type(element.username);
        cy.get('[name="password"]').focus().clear().type(element.password);
    });
});

When('I click on Log in button', () => {
    cy.get('[type="submit"]').click();
});

Then('{string} should be shown', (content) => {
    cy.get(
        '[class="ssls-btn waves-effect waves-classic ssls-btn--sm ssls-header-btn active-page"]'
    ).should('contain', content);
});

const sectionNames = [
    'CONTACT US',
    'LOGIN PORTAL',
    'BUTTON CLICKS',
    'TO DO LIST',
    'PAGE OBJECT MODEL',
    'ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)',
    'DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)',
    'AJAX LOADER',
    'ACTIONS',
    'SCROLLING AROUND',
    'POPUP & ALERTS',
    'IFRAME',
    'HIDDEN ELEMENTS',
    'DATA, TABLES & BUTTON STATES',
    'AUTOCOMPLETE TEXTFIELD',
    'FILE UPLOAD',
    'DATEPICKER',
];

sectionNames.forEach((name) => {
    cy.contains('[class="section-title"]', name).then((text) => {
        cy.percySnapshot('${name} section');
    });
    cy.scrollTo(0, 250);
});
