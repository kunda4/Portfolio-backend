
// import axios from "axios";
// import chai from "chai";
// import Mocha from "mocha";
// import chaiHttp from "chai-http";
// import app from "../server.js"



//  const should = chai.should()

// chai.use (chaiHttp)
//  chai.should()
// const expect = chai.expect;
// describe('Blog API', function() {
//     this.timeout(10000);
//     let blogId = '';
// describe ('POST /blogs', ()=>{
//     it('should post the blog', (done)=>{
//         chai.request(app)
//         .post ("/api/v1/blogs")
//         .send ({
//             name: "Tech world",
//             description: "Nowadays Techonogy",
//             author: "Kunda",
//             imageUrl: "dfghjklvbnm,dfghj"
//         })
//         .then (( err, res) =>{

//             expect(res).to.have.status(200);
//             expect(res.body.name).to.equal('Test Post');
//             expect(res.body.description).to.equal('Look at this');
//             expect(res.body.author).to.equal('This is a test post.');
//             expect(res.body.imageUrl).to.equal('This is a test post.');
//             expect(res.body).to.have.property('_id');
//             blogId = res.body._id;
            
//         })
//         done();
//     });
// });

// describe ('GET /blogs', ()=>{
//     it('should return an array of the blogs', (done)=>{
//         chai.request(app)
//         .get ("/api/v1/blogs")
        
//         .end (function( err, res){

//             expect(res).to.have.status(200);
//             expect(res.body).to.be.an('array');
//             expect(res.body.length).to.be.greaterThan(0);
       
//         });
//         done();
//     });
// });


// describe('GET /blogs/{id}', function() {
//   it('should return a specific blog post', function(done) {
//     const blogId = "640f0886e363a682d956b544";
//     chai.request(app)
//       .get(`/api/v1/blogs/${blogId}`)
//       .end(function(err, res) {
//         expect(res).to.have.status(200);
//         expect(res.body._id).to.equal(blogId);
//          // moved inside the .end() callback
//       });
//       done();
//   });
// });

// describe('PUT /blogs/{id}', function() {
//   it('should update a specific blog post', function(done) {
//     const blogId = "640f0886e363a682d956b544";
//     const newBlog = {
//       name: "Updated Test Post",
//       description: "Updated Test Post",
//       author: "Updated Test Post",
//       imageUrl: "Updated Test Post",
//     }
//     chai.request(app)
//       .put(`/api/v1/blogs/${blogId}`)
//       .send(newBlog)
//       .end(function(err, res) {
//         expect(res).to.have.status(200);
//         expect(res.body.name).to.equal('Updated Test Post');
//         expect(res.body.description).to.equal('Updated Test Post');
//         expect(res.body.author).to.equal('Updated Test Post');
//         expect(res.body.imageUrl).to.equal('Updated Test Post');
        
         
//       });
//       done();
//   });
// });


//   describe('DELETE /blogs/{id}', function() {
//     it('should delete a specific blog post', function(done) {
//       const blogId = "640f0886e363a682d956b544";
//       chai.request(app)
//         .delete(`/api/v1/blogs/${blogId}`)
//         .end(function(err, res) {
//           expect(res).to.have.status(200);
//           expect(res.body.message).to.equal('Blog post deleted successfully.');
          
//         });
//        done(); 
//     });
//   });


// });
