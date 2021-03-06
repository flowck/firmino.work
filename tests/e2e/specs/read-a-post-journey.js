describe("Read a post journey", () => {
  it("Reads a blog post", () => {
    const POST_INDEX = 2;

    cy.visit("/");
    cy.openBlog();
    cy.openPost(POST_INDEX);
  });
});
