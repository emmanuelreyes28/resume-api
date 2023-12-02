const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /experience", () => {
  it("should return a JSON array of experiences", (done) => {
    chai
      .request(app)
      .get("/experience")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("array");
        //iterate through each experience entry in the array
        res.body.forEach((experience, index) => {
          describe(`Experience Entry ${index + 1}`, () => {
            it("should have the required properties", () => {
              expect(experience).to.have.property("company").to.be.a("string")
                .that.is.not.empty;
              expect(experience).to.have.property("position").to.be.a("string")
                .that.is.not.empty;
              expect(experience).to.have.property("location").to.be.a("string")
                .that.is.not.empty;
              expect(experience).to.have.property("startDate").to.be.a("string")
                .that.is.not.empty;
              expect(experience).to.have.property("endDate").to.be.a("string")
                .that.is.not.empty;
              expect(experience).to.have.property("duties").to.be.a("array")
                .that.is.not.empty;
            });
          });
        });
        done();
      });
  });
  it("should handle the case where the experience data is not found", (done) => {
    // temporarily rename or move the experience.json file
    chai
      .request(app)
      .get("/experience")
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
