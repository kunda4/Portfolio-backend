
import axios from "axios";
import chai from "chai";
import Mocha from "mocha";
import chaiHttp from "chai-http";
import app from "../server.js"



 const should = chai.should()

chai.use (chaiHttp)
 chai.should()
const expect = chai.expect;
describe('User API', function() {
    this.timeout(10000);
    let userId = '';
describe ('POST /login', ()=>{
    it('should login with your credintial', (done)=>{
        chai.request(app)
        .post ("/api/v1/login")
        .send ({
            email: "kundaaggy@gmail.com",
            password: "12345678"
           
        })
        .then (( err, res) =>{

            expect(res).to.have.status(200);
            expect(res.body.email).to.equal('Test Post');
            expect(res.body.password).to.equal('Look at this');
            expect(res.body).to.have.property('_id');
            userId = res.body._id;
            
        })
        done();
    });
});
describe ('POST /register', ()=>{
    it('you should do register with this', (done)=>{
        chai.request(app)
        .post ("/api/v1/register")
        .send ({
            FullName: "Agnes IRADUKUNDA",
            email: "kundaaggy@gmail.com",
            password: "12345678",
            isAdmin: true
           
        })
        .then (( err, res) =>{

            expect(res).to.have.status(200);
            expect(res.body.FullName).to.equal('Test Post');
            expect(res.body.email).to.equal('Test Post');
            expect(res.body.password).to.equal('Look at this')
            expect(res.body.isAdmin).to.equal('Look at this');
            expect(res.body).to.have.property('_id');
            userId = res.body._id;
            
        })
        done();
    });
});


describe ('GET /users', ()=>{
    it('should return an array of the users', (done)=>{
        chai.request(app)
        .get ("/api/v1/users")
        
        .end (function( err, res){

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.greaterThan(0);
       
        });
        done();
    });
});


describe('GET /users/get/{id}', function() {
  it('should return a specific user post', function(done) {
    const userId = "6411c702392824a6746e252b";
    chai.request(app)
      .get(`/api/v1/users/get/${userId}`)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body._id).to.equal(userId);
         // moved inside the .end() callback
      });
      done();
  });
});

describe('PUT /users/update/{id}', function() {
  it('should update a specific user post', function(done) {
    const userId = "6411c702392824a6746e252b";
    const newuser = {
      FullName: "Updated FullName",
      email: "Updated email",
      password: "Updated password",
      isAdmin: true
    }
    chai.request(app)
      .put(`/api/v1/users/update/${userId}`)
      .send(newuser)
      .end(function(err, res) {
        console.log ("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        console.log(res.body)
        console.log ("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        expect(res).to.have.status(200);
        expect(res.body.FullName).to.equal('Updated FullName');
        expect(res.body.email).to.equal('Updated email');
        expect(res.body.password).to.equal('Updated password');
        expect(res.body.isAdmin).to.equal(true);
        
         
      });
      done();
  });
});


  describe('DELETE /users/delete/{id}', function() {
    it('should delete a specific user post', function(done) {
      const userId = "640f0886e363a682d956b544";
      chai.request(app)
        .delete(`/api/v1/users/delete/${userId}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('user post deleted successfully.');
          
        });
       done(); 
    });
  });


});
