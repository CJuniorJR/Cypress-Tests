/// <reference types="cypress" />

describe('Login policie', () => {
    beforeEach(() => {
        cy.visit('https://customersnonprod.b2clogin.com/CustomersNonProd.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_DEV_SIGNUP_SIGNIN&client_id=8513e29d-6409-4931-893e-aa48cc088abc&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fjwt.ms&scope=openid&response_type=id_token&prompt=login&ui_locales=pt-br')
    })
  
    it('Do Login and return token JWT', () => {

        cy.get('input#signInName').type('claudio.junior@edenred.com').should('have.value', 'claudio.junior@edenred.com')

        cy.get('input#password').type('Ticket@2023').should('have.value', 'Ticket@2023')

        cy.get('button#next').click()
    })

    

    it('Click on Forgot Password and send MFA email', () => {

        cy.get('a#forgotPassword').click()

        cy.get('input#email').type('claudio.junior@edenred.com').should('have.value', 'claudio.junior@edenred.com')

        cy.get('button#emailVerificationControl_but_send_code').click()

        cy.get("div#emailVerificationControl_success_message").should('have.text', 'O código de verificação foi enviado para o seu Email.')
        
      })
  })
  