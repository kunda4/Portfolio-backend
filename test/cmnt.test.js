
import axios from "axios";
import chai from "chai";
import Mocha from "mocha";
import chaiHttp from "chai-http";
import app from "../server.js"



 const should = chai.should()

chai.use (chaiHttp)
 chai.should()
const expect = chai.expect;
describe('Comment API', function() {
    this.timeout(10000);
    let commentsId = '';
describe ('POST /comments', ()=>{
    it('should post the comments', (done)=>{
        chai.request(app)
        .post ("/api/v1/comments")
        .send ({
            name: "Tech world",
            comment: "fghjklhjkl;hjk",
            createdAt: Date
        })
        .then (( err, res) =>{

            expect(res).to.have.status(200);
            expect(res.body.name).to.equal('Test Post');
            expect(res.body.comment).to.equal('Look at this');
            expect(res.body.createdAt).to.equal('This is a test post.');
            expect(res.body).to.have.property('_id');
            commentsId = res.body._id;
            
        })
        done();
    });
});

describe ('GET /comments', ()=>{
    it('should return an array of the portifolio', (done)=>{
        chai.request(app)
        .get ("/api/v1/comments")
        
        .end (function( err, res){

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.greaterThan(0);
       
        });
        done();
    });
});


describe('GET /comments/get/{id}', function() {
  it('should return a specific comments post', function(done) {
    const commentsId = "6410346f79fe12ef911fad0d";
    chai.request(app)
      .get(`/api/v1/comments/get/${commentsId}`)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body._id).to.equal(commentsId);
         
      });
      done();
  });
});


  describe('DELETE /comments/delete/{id}', function() {
    it('should delete a specific comments post', function(done) {
      const commentsId = "6410346f79fe12ef911fad0d";
      chai.request(app)
        .delete(`/api/v1/comments/delete/${commentsId}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('comment post deleted successfully.');
          
        });
       done(); 
    });
  });


});
