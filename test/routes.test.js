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
      res.body.length.should.equal(3);
      res.body[0].should.have.property('city');
      res.body[0].city.should.equal('London');
      res.body[0].should.have.property('country');
      res.body[0].country.should.equal('UK');
      res.body[0].should.have.property('activities');
      res.body[0].activities[0].should.equal('Watch Premier League football');
      res.body[0].should.have.property('places');
      res.body[0].places[0].should.equal('London Eye');
      done();
      });
    });
  });

  describe('GET /api/v1/cities/:id', function() {
    it('should return a single show', function(done) {
      chai.request(server)
      .get('/api/v1/cities/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('city');
        res.body.city.should.equal('London');
        res.body.should.have.property('country');
        res.body.country.should.equal('UK');
        res.body.should.have.property('activities');
        res.body.activities[0].should.equal('Watch Premier League football');
        res.body.should.have.property('places');
        res.body.places[0].should.equal('London Eye');
        done();
      });
    });
  });

  describe('POST /api/v1/cities', function() {
    it('should add a show', function(done) {
      chai.request(server)
      .post('/api/v1/cities')
      .send({
        city: 'Dublin',
        country : 'Ireland',
        activities: ['Guiness Storehouse', 'Jameson Factory', 'Pheonix Park'],
        places: ['The Temple Bar', 'The Old Storehouse', 'The Brazen Head']
      })
      .end(function(err, res) {
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('city');
        res.body.city.should.equal('Dublin');
        res.body.should.have.property('country');
        res.body.country.should.equal('Ireland');
        res.body.should.have.property('activities');
        res.body.activities[0].should.equal('Guiness Storehouse');
        res.body.should.have.property('places');
        res.body.places[0].should.equal('The Temple Bar');
        done();
      });
    });
  });

  describe('PUT /api/v1/cities/:id', function() {
    it('should update a city', function(done) {
      chai.request(server)
      .put('/api/v1/cities/1')
      .send({
        country: 'United Kingdom'
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('city');
        res.body.city.should.equal('London');
        res.body.should.have.property('country');
        res.body.country.should.equal('United Kingdom');
        res.body.should.have.property('activities');
        res.body.activities[0].should.equal('Watch Premier League football');
        res.body.should.have.property('places');
        res.body.places[0].should.equal('London Eye');
        done();
      });
    });
  });
});