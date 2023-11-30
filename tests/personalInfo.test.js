const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /personalInfo", () => {
  it("should return personal information", (done) => {
    chai
      .request(app)
      .get("/personalInfo")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.name).to.equal("Emmanuel Reyes");
        expect(res.body.email).to.equal("emmanuel.reyes28@gmail.com");
        expect(res.body.phone).to.equal("123-123-1234");
        expect(res.body.city).to.equal("Los Angeles");
        expect(res.body.state).to.equal("California");
        done();
      });
  });
});
