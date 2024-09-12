import commands from '../commands';

export default function login(email,pwd)
{
    cy.login(email,pwd);
}
