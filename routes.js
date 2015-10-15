/**
 * Created by yevhen_chmykhun on 15.10.15.
 */
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var winston = require('winston');
var config = require('../config/config');

describe('Routing', function() {
  var url = 'http://localhost:3000/api';
  // within before() you can run all the operations that are needed to setup your tests. In this case
  // I want to create a connection with the database, and when I'm done, I call done().
  before(function(done) {
    // In our tests we use the test db
    mongoose.connect(config.mongoose.uri);
    done();
  });
  // use describe to give a title to your test suite, in this case the tile is "Account"
  // and then specify a function in which we are going to declare all the tests
  // we want to run. Each test starts with the function it() and as a first argument
  // we have to provide a meaningful title for it, whereas as the second argument we
  // specify a function that takes a single parameter, "done", that we will use
  // to specify when our test is completed, and that's what makes easy
  // to perform async test!
  describe('Account', function() {

    it('should return error trying to register with invalid phone', function(done) {
      var profile = {
        "phone": "+380xxxxxxxxx",
        "name": "Alex",
        "email": "alex@mail.com",
        "password": "qwerty"
      };
      // once we have specified the info we want to send to the server via POST verb,
      // we need to actually perform the action on the resource, in this case we want to
      // POST on /api/profiles and we want to send some info
      // We do this using the request object, requiring supertest!
      request(url)
          .post('/register')
          .send(profile)
        // end handles the response
          .end(function(err, res) {
            if (err) {
              throw err;
            }

            res.status.should.be.equal(422);
            done();
          });
    });

    it('should return error trying to register without name', function(done) {
      var profile = {
        "phone": "+380661234567",
        "email": "alex@mail.com",
        "password": "qwerty"
      };
      // once we have specified the info we want to send to the server via POST verb,
      // we need to actually perform the action on the resource, in this case we want to
      // POST on /api/profiles and we want to send some info
      // We do this using the request object, requiring supertest!
      request(url)
          .post('/register')
          .send(profile)
        // end handles the response
          .end(function(err, res) {
            if (err) {
              throw err;
            }

            res.status.should.be.equal(422);
            done();
          });
    })

    it('should return error trying to register without name', function(done) {
      var profile = {
        "phone": "+380661234567",
        "email": "alex@mail.com",
        "password": "qwerty"
      };
      // once we have specified the info we want to send to the server via POST verb,
      // we need to actually perform the action on the resource, in this case we want to
      // POST on /api/profiles and we want to send some info
      // We do this using the request object, requiring supertest!
      request(url)
          .post('/register')
          .send(profile)
        // end handles the response
          .end(function(err, res) {
            if (err) {
              throw err;
            }

            res.status.should.be.equal(422);
            done();
          });
    })

  });
});