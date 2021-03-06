Feature: Sections on webdriveruniversity site

    I want to do visual check of sections
    @smoke
    Scenario: Check sections on webdriveruniversity site
        Given I open webdriveruniversity site
        When I type in
            | username                      | password |
            | ssls.automation+666@gmail.com | 123456   |
        And I click on Log in button
        Then "MY SSL" should be shown
