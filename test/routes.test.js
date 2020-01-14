process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('GET /api/v1/cities', function() {
    it('should return all cities', function(done) {
      chai.request(server)
      .get('/api/v1/cities')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(4);
      res.body[0].should.have.property('city');
      res.body[0].city.should.equal('London');
      res.body[0].should.have.property('country');
      res.body[0].country.should.equal('UK');
      res.body[0].should.have.property('activities');
      res.body[0].activities.should.equal([
        'Watch Premier League football',
        'Watch cricket at Lords',
        'Watch tennis at Wimbledon'
        ]);
      res.body[0].should.have.property('places');
      res.body[0].places.should.equal([
        'London Eye',
        'Big Ben',
        'Westminster Abbey'
        ]);
      done();
      });
    });
  });

  // describe('GET /api/v1/cities/:id', function() {
  //   it('should return a single show', function(done) {
  //     chai.request(server)
  //     .get('/api/v1/cities/1')
  //     .end(function(err, res) {
  //       res.should.have.status(200);
  //       res.should.be.json; // jshint ignore:line
  //       res.body.should.be.a('object');
  //       res.body.should.have.property('city');
  //       res.body.city.should.equal('London');
  //       res.body.should.have.property('country');
  //       res.body.country.should.equal('UK');
  //       res.body.should.have.property('activities');
  //       res.body.activities.should.equal([
  //           'Watch Premier League football',
  //           'Watch cricket at Lords',
  //           'Watch tennis at Wimbledon'
  //           ]);
  //       res.body.should.have.property('places');
  //       res.body.places.should.equal([
  //           'London Eye',
  //           'Big Ben',
  //           'Westminster Abbey'
  //           ]);
  //       done();
  //     });
  //   });
  // });

});