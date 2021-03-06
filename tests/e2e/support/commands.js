import { LINK_BLOG, POST, POST_TITLE } from "./constants";

Cypress.Commands.add("openBlog", () => {
  cy.get(LINK_BLOG).click();
});

Cypress.Commands.add("openPost", postIndex => {
  cy.get(POST).each((post, index) => {
    if (index === postIndex) {
      cy.get(post)
        .find(POST_TITLE)
        .click();
    }
  });
});
