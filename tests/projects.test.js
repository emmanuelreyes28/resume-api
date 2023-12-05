const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /projects", () => {
  it("should return a JSON arrays of projects", (done) => {
    chai
      .request(app)
      .get("/projects")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("array");
        res.body.forEach((project, index) => {
          describe(`Project Entry ${index + 1}`, () => {
            it("should have the required properties", () => {
              expect(project).to.have.property("title").to.be.a("string").that
                .is.not.empty;
              expect(project).to.have.property("description").to.be.a("string")
                .that.is.not.empty;
              expect(project).to.have.property("startDate").to.be.a("string")
                .that.is.not.empty;
              expect(project).to.have.property("endDate").to.be.a("string");
              expect(project).to.have.property("ongoing").to.be.a("boolean")
                .that.is.not.to.be.null;
              expect(project).to.have.property("highlights").to.be.a("array")
                .that.is.not.empty;
              expect(project)
                .to.have.property("technologiesUsed")
                .to.be.a("array").that.is.not.empty;
              expect(project).to.have.property("link").to.be.a("string").that.is
                .not.empty;
            });
          });
        });
        done();
      });
  });
});
