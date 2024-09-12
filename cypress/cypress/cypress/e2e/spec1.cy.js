import { beforeEach } from 'mocha';
import login from '../support/pages/login';

const LOCATORS = require('../support/locators/login')
describe.skip('template spec', () => {
  before(() =>{
    console.log('This is a hook');
  })
  beforeEach(() =>{
    console.log('this is before each hook' );
  })

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe.skip('My First test', ()=>{
  it("it doesnt do much", ()=>{
    expect(true).to.equal(true);
  })
})
describe.only('My First Test to write',()=>{
  it.skip("it verifies", ()=>{
    expect(1).to.equal(1);
  })
  it.skip("it verfies false or not ",()=>{
    expect(false).to.equal(false);
  })
  it.skip('testing login functionality' , ()=>{
      login('sajja.vaishnav@gmail.com','password123');
      cy.get(LOCATORS.AUTH_ERROR_MSG_BOX).should('be.visible');
      cy.get(LOCATORS.ERRORHEADEING).first().should('have.text','There was a problem');
      cy.contains('There was a problem');
  })



  it.skip('testing an API', () =>{
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: 'https://official-joke-api.appspot.com/random_joke',
      headers: {
        Accept: 'application/json',
      }
    }).then((res) =>{
      expect(res.status).to.eq(200);
      expect(res.status).to.not.eq(201);
      expect(res.body).to.not.eq(null);
   });
  })
  it('interceptingan API', ()=>{
    cy.intercept('GET','https://official-joke-api.appspot.com/random_joke',(res)=>{
      res.status = 500;
    }).as('Interceptor');
    cy.wait('@Interceptor').its('response.statuscode').should('have',500);
  })
})
