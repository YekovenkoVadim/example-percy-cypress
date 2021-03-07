/// <reference types = "cypress"/>

describe('Functional tests', function () {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        //Open site page
        cy.visit('/');
    });

    it('Test #11. Check window and title', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('contain', 'WebDriverUniversity.com');
        cy.percySnapshot('page title');
    });

    it.skip('Test #2. Check linked urls in the sections', () => {
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

        const expectedUrls = [
            'http://www.webdriveruniversity.com/Contact-Us/contactus.html',
            'http://www.webdriveruniversity.com/Login-Portal/index.html',
            'http://www.webdriveruniversity.com/Click-Buttons/index.html',
            'http://www.webdriveruniversity.com/To-Do-List/index.html',
            'http://www.webdriveruniversity.com/Page-Object-Model/index.html',
            'http://www.webdriveruniversity.com/Accordion/index.html',
            'http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html',
            'http://www.webdriveruniversity.com/Ajax-Loader/index.html',
            'http://www.webdriveruniversity.com/Actions/index.html',
            'http://www.webdriveruniversity.com/Scrolling/index.html',
            'http://www.webdriveruniversity.com/Popup-Alerts/index.html',
            'http://www.webdriveruniversity.com/IFrame/index.html',
            'http://www.webdriveruniversity.com/Hidden-Elements/index.html',
            'http://www.webdriveruniversity.com/Data-Table/index.html',
            'http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html',
            'http://www.webdriveruniversity.com/File-Upload/index.html',
            'http://www.webdriveruniversity.com/Datepicker/index.html',
        ];

        /*         cy.visit('/');
        cy.contains('[class="section-title"]', 'CONTACT US').invoke('attr', 'url');
        cy.log() */

        sectionNames.forEach((name) => {
            cy.contains('[class="section-title"]', name).then((item) => {
                cy.get(item).invoke('attr', 'url');
                //cy.log(`${item} section`).percySnapshot(`${item} section`);
            });
            cy.scrollTo(0, 250);
        });
    });

    it.skip('Test #3. Check titles of the linked pages', () => {
        const expectedUrls = [
            'http://www.webdriveruniversity.com/Contact-Us/contactus.html',
            'http://www.webdriveruniversity.com/Login-Portal/index.html',
            'http://www.webdriveruniversity.com/Click-Buttons/index.html',
            'http://www.webdriveruniversity.com/To-Do-List/index.html',
            'http://www.webdriveruniversity.com/Page-Object-Model/index.html',
            'http://www.webdriveruniversity.com/Accordion/index.html',
            'http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html',
            'http://www.webdriveruniversity.com/Ajax-Loader/index.html',
            'http://www.webdriveruniversity.com/Actions/index.html',
            'http://www.webdriveruniversity.com/Scrolling/index.html',
            'http://www.webdriveruniversity.com/Popup-Alerts/index.html',
            'http://www.webdriveruniversity.com/IFrame/index.html',
            'http://www.webdriveruniversity.com/Hidden-Elements/index.html',
            'http://www.webdriveruniversity.com/Data-Table/index.html',
            'http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html',
            'http://www.webdriveruniversity.com/File-Upload/index.html',
            'http://www.webdriveruniversity.com/Datepicker/index.html',
        ];

        let newPageTitles = [
            'WebDriver | Contact Us',
            'WebDriver | Login Portal',
            'WebDriver | Button Clicks',
            'WebDriver | To Do List',
            'WebDriver | Page Object Model',
            'Accordion Items',
            'WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)',
            'WebDriver | Ajax-Loader',
            'WebDriver | Actions',
            'WebDriver | Scrolling',
            'WebDriver | Popups & Alerts',
            'WebDriver | IFrame',
            'Hidden Elements',
            'WebDriver | Data Tables',
            'WebDriver | Contact Us',
            'File Upload',
            'WebDriver | Datepicker',
        ];

        var index;
        (function checkLinksWorking() {
            newPageUrl.forEach((url, index) => {
                const titles = newPageTitles[index];
                cy.visit(url).title().should('eq', titles);
                if (
                    url ==
                    'http://www.webdriveruniversity.com/Ajax-Loader/index.html'
                ) {
                    cy.wait(10000);
                }
                cy.percySnapshot(`${url} page`);
            });
        })(newPageUrl, newPageTitles, index);
    });
});

/*         newPageUrl.forEach((newUrl, index) => {
            const pageTitles = newPageTitles[index];
                cy.visit(newUrl).title().should('contain', pageTitles);
                var counter = index*250;

            })
            cy.visit('http://www.webdriveruniversity.com/');
            cy.scrollTo(0, counter);
        }) */
//var counter;
/*                 return function() {
                    counter = index*250;
                    cy.go('back');
                    cy.visit('http://www.webdriveruniversity.com/');
                    cy.scrollTo(0, counter);
                } */
