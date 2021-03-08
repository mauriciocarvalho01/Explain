
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


const credentials = '../config/google/credentials/credentials.json';

// const { client_secret, client_id } = credentials.web;

const options = {
  providers: [
    Providers.Google({
      clientId: '603476163070-s50olv0oqrfkcls4eueu4ni4dkf9rq1q.apps.googleusercontent.com',
      clientSecret: 'i29dsei2yXKi8HMnRb7W9rx0'

    })
  ]
}

export default (req, res) => NextAuth(req, res, options); 