
import axios from "axios";
import chai from "chai";
import Mocha from "mocha";
import chaiHttp from "chai-http";
import app from "../server.js"



 const should = chai.should()

chai.use (chaiHttp)
 chai.should()
const expect = chai.expect;
describe('Querry API', function() {
    this.timeout(10000);
    let querriesId = '';
describe ('POST /querries', ()=>{
    it('should post the querries', (done)=>{
        chai.request(app)
        .post ("/api/v1/querries")
        .send ({
            name: "Tech world",
            email: "fghjklhjkl;hjk",
            querry: "how ws u",
            createdAt: Date
        })
        .then (( err, res) =>{

            expect(res).to.have.status(200);
            expect(res.body.name).to.equal('Test Post');
            expect(res.body.email).to.equal('Look at this');
            expect(res.body.querry).to.equal('Look at this');
            expect(res.body.createdAt).to.equal('This is a test post.');
            expect(res.body).to.have.property('_id');
            querriesId = res.body._id;
            
        })
        done();
    });
});

describe ('GET /querries', ()=>{
    it('should return an array of the portifolio', (done)=>{
        chai.request(app)
        .get ("/api/v1/querries")
        
        .end (function( err, res){

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.greaterThan(0);
       
        });
        done();
    });
});


describe('GET /querries-get/{id}', function() {
  it('should return a specific querries post', function(done) {
    const querriesId = "6410346f79fe12ef911fad0d";
    chai.request(app)
      .get(`/api/v1/querries-get/${querriesId}`)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body._id).to.equal(querriesId);
         
      });
      done();
  });
});


  describe('DELETE /querries-delete/{id}', function() {
    it('should delete a specific querries post', function(done) {
      const querriesId = "6410346f79fe12ef911fad0d";
      chai.request(app)
        .delete(`/api/v1/querries-delete/${querriesId}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('querry post deleted successfully.');
          
        });
       done(); 
    });
  });


});
