# Cryptoguess frontend

## About:

The user interface for interacting with the Cryptoguess platform.

Written in React and Tailwind css

## Running:

Install dependencies by running `npm install`

Run local debug server by `npm start`

To compile project run `npm run build`

And to simulate server deployment run: `npx serve -d build`

## API:

The API returns an array of objects that corespond to the todays cryptocurrencies

As of the time of writing in order to submit result of the user, the frontend needs to authenticate as temporary user or admin.

Admins are not limited to one request per session.
