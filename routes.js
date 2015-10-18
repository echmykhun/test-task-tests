/**
 * Created by yevhen_chmykhun on 15.10.15.
 */
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var winston = require('winston');

describe('Routing', function () {
  var url = 'http://localhost:3000/api';
  var profile, token, id, field, status;


  describe('Register', function () {


    var registerCallback = function (profile, status, field, next) {
      return function (done) {
        request(url)
          .post('/register')
          .send(profile)
          // end handles the response
          .end(function (err, res) {
            if (err) {
              throw err;
            }
            res.status.should.be.equal(status);

            if (res.body[0] && res.body[0].field) {
              res.body[0].field.should.be.equal(field);
            } else {
              if (res.body["token"]) {
                token = res.body["token"];
              } else {
                throw "Wrong success answer"
              }
            }

            if (typeof next == "function") next();
            done();
          });
      }
    };

    status = 422;
    profile = {
      "phone": "+380xxxxxxxxx",
      "name": "Alex",
      "email": "alex@mail.com",
      "password": "qwerty"
    };
    field = "phone";
    it('should return error trying to register with invalid phone', registerCallback(profile, status, field));

    profile = {
      "phone": "+380661234567",
      "email": "alex@mail.com",
      "password": "qwerty"
    };
    field = "name";
    it('should return error trying to register without name', registerCallback(profile, status, field));

    profile = {
      "phone": "+380661234567",
      "name": "Alex",
      "password": "qwerty"
    };
    field = "email";
    it('should return error trying to register without email', registerCallback(profile, status, field));

    status = 200;
    profile = {
      "phone": "+380661234567",
      "name": "Alex",
      "email": "alex@mail.com",
      "password": "qwerty"
    };
    it('should return success', registerCallback(profile, status));

  });
});