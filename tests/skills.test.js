const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /skills", () => {
  it("should return soft and technical skills", (done) => {
    chai
      .request(app)
      .get("/skills")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
        expect(res.body.programmingLanguages).to.be.an("array").that.is.not
          .empty;
        expect(res.body.webTechnologies).to.be.an("array").that.is.not.empty;
        expect(res.body.databases).to.be.an("array").that.is.not.empty;
        expect(res.body.frameworks).to.be.an("array").that.is.not.empty;
        expect(res.body.versionControl).to.be.an("array").that.is.not.empty;
        expect(res.body.tools).to.be.an("array").that.is.not.empty;
        expect(res.body.softSkills).to.be.an("array").that.is.not.empty;
        done();
      });
  });
});
