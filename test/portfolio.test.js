
import axios from "axios";
import chai from "chai";
import Mocha from "mocha";
import chaiHttp from "chai-http";
import app from "../server.js"



 const should = chai.should()

chai.use (chaiHttp)
 chai.should()
const expect = chai.expect;
describe('Portfolio API', function() {
    this.timeout(10000);
    let portfolioId = '';
describe ('POST /portfolio', ()=>{
    it('should post the portfolio', (done)=>{
        chai.request(app)
        .post ("/api/v1/portfolio")
        .send ({
            title: "Tech world",
            imageUrl: "fghjklhjkl;hjk",
            description: "Nowadays Technology",
            createdAt: Date
        })
        .then (( err, res) =>{

            expect(res).to.have.status(200);
            expect(res.body.title).to.equal('Test Post');
            expect(res.body.imageUrl).to.equal('Look at this');
            expect(res.body.description).to.equal('This is a test post.');
            expect(res.body.createdAt).to.equal('This is a test post.');
            expect(res.body).to.have.property('_id');
            portfolioId = res.body._id;
            
        })
        done();
    });
});

describe ('GET /portfolio', ()=>{
    it('should return an array of the portifolio', (done)=>{
        chai.request(app)
        .get ("/api/v1/portfolio")
        
        .end (function( err, res){

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.greaterThan(0);
       
        });
        done();
    });
});


describe('GET /portfolio/get/{id}', function() {
  it('should return a specific portfolio post', function(done) {
    const portfolioId = "6410346f79fe12ef911fad0d";
    chai.request(app)
      .get(`/api/v1/portfolio/get/${portfolioId}`)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body._id).to.equal(portfolioId);
         // moved inside the .end() callback
      });
      done();
  });
});

describe('PUT /portfolio/update/{id}', function() {
  it('should update a specific portfolio post', function(done) {
    const portfolioId = "6410346f79fe12ef911fad0d";
    const newportfolio = {
      title: "Updated Test Post",
      imageUrl: "Updated Test Post",
      description: "Updated Test Post",
      createdAt: Date
      
    }
    chai.request(app)
      .put(`/api/v1/portfolio/update/${portfolioId}`)
      .send(newportfolio)
      .end(function(err, res) {
        console.log ("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        console.log(res.body)
        console.log ("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        expect(res).to.have.status(200);
        expect(res.body.title).to.equal('Updated Test Post');
        expect(res.body.imageUrl).to.equal('Updated Test Post');
        expect(res.body.description).to.equal('Updated Test Post');
        expect(res.body.createdAt).to.equal(Date);
        
        
         
      });
      done();
  });
});


  describe('DELETE /portfolio/delete/{id}', function() {
    it('should delete a specific portfolio post', function(done) {
      const portfolioId = "6410346f79fe12ef911fad0d";
      chai.request(app)
        .delete(`/api/v1/portfolio/delete/${portfolioId}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('portfolio post deleted successfully.');
          
        });
       done(); 
    });
  });


});
