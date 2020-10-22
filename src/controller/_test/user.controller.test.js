import request from 'supertest';
import { User } from '../../models/user'

let server;
describe("/api/auth", () => {
  beforeEach(() => { server = require('../../app'); })
  afterEach(async () => { 
    server.close(); 
  });
  it("should register user", () => {});
});
