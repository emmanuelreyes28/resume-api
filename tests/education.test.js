const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /education", () => {
  it("should return education information", (done) => {
    chai
      .request(app)
      .get("/education")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.school).to.equal("University of California, Irvine");
        expect(res.body.degree).to.equal("Bachelor of Science");
        expect(res.body.major).to.equal("Informatics");
        expect(res.body.minor).to.equal("Management");
        expect(res.body.graduationYear).to.equal("2019");
        done();
      });
  });
});
