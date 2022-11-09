describe("Test Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });
  it("Check typing and research function", () => {
    cy.get("input").type("Si").should("have.value", "Si");
  });
  it("Check to navigate to other details subpages", () => {
    cy.get(".bEWwFY");
    cy.clickElement("potdetails");
    cy.url().should("eq", "http://localhost:3000/dashboard/potdetails");
    cy.clickElement("/dashboard");
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.clickElement("plantdetails");
    cy.url().should("eq", "http://localhost:3000/dashboard/plantdetails");
    cy.clickElement("/dashboard");
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });
  it("Check to navigate to subpages about Pots", () => {
    cy.clickElement("/dashboard/mypots");
    cy.url().should("eq", "http://localhost:3000/dashboard/mypots");
    cy.clickElement("/dashboard/mypots/addpot");
    cy.url().should("eq", "http://localhost:3000/dashboard/mypots/addpot");
    cy.clickElement("/dashboard/mypots");
    cy.url().should("eq", "http://localhost:3000/dashboard/mypots");
    cy.clickElement("/dashboard");
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });

  it("Check to navigate to subpages about Plants", () => {
    cy.clickElement("/dashboard/myplants");
    cy.url().should("eq", "http://localhost:3000/dashboard/myplants");
    cy.clickElement("/dashboard");
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });
  it("Check to navigate to Calendar", () => {
    cy.clickElement("/calendar");
    cy.url().should("eq", "http://localhost:3000/calendar");
  });
  it("Check navigation between pages", () => {
    cy.clickNavElement("calendar");
    cy.url().should("eq", "http://localhost:3000/calendar");
    cy.clickNavElement("dashboard");
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.clickNavElement("user");
    cy.url().should("eq", "http://localhost:3000/user");
    cy.clickNavElement("camera");
    cy.url().should("eq", "http://localhost:3000/camera");
  });
});
