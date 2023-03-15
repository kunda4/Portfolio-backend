
import axios from "axios";
import chai from "chai";
import Mocha from "mocha";
import chaiHttp from "chai-http";
import app from "../server.js"



chai.use (chaiHttp)
const expect = chai.expect;
describe('Blog API', function() {
    this.timeout(10000);
    let blogId = '';
describe ('POST /blogs', ()=>{
    it('should post the blog', (done)=>{
        chai.request(app)
        .post ("/api/v1/blogs")
        .send ({
            name: "Tech world",
            description: "Nowadays Techonogy",
            author: "Kunda",
            imageUrl: "dfghjklvbnm,dfghj"
        })
        .then (( err, res) =>{

            expect(res).to.have.status(200);
            expect(res.body.name).to.equal('Test Post');
            expect(res.body.description).to.equal('Look at this');
            expect(res.body.author).to.equal('This is a test post.');
            expect(res.body.imageUrl).to.equal('This is a test post.');
            expect(res.body).to.have.property('_id');
            blogId = res.body._id;
            
        })
        done();
    });
});
});
