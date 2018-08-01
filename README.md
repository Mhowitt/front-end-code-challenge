## My Notes (Miranda Howitt) are in the Original Note Section of this README.

# Avametric Front End Development Challenge

Hi there!

Thanks for your interest in joining the team here at Avametric. Part of our
evaluation process is to set an open-ended challenge which will allow you to
flex your creative muscles and give you an opportunity to demonstrate your
coding skills. We think (and hope you agree) that this is better than asking
you to scribble algorithms on a whiteboard in an interview setting.

We realize that this represents a significant investment of effort, but one we
hope will be worthwhile for both you and us. Even if your application to Avametric ultimately doesn't end up being the right fit, you are more than welcome to use what you
produce for this challenge in your personal portfolio.

If you are successful then we'll schedule you for an interview and will use what you produce for this challenge as a starting point for our discussions.

Cheers!
The Avametric Team

## Overview

We have created a simple [NodeJS](https://nodejs.org) application which:

1.  Bundles your source code and serves it through http://localhost:3000/
2.  Provides **mock** data through http://localhost:3000/api/

Your challenge is to build something interesting that makes use of the mock data provided.

You can choose whichever technologies you like to create this application. Feel
free to make changes to _any_ of the files in this repository, or to swap out
any of the technologies we've provided. It's your party. 😎

## Prerequisites

1.  You will need a basic understanding of [Git](https://git-scm.com/) source
    control management
2.  You will need a [GitHub](https://github.com/) account
3.  [NodeJS](http://nodejs.org/download/) should be installed on your machine
4.  You will need to be familiar with making data requests in web applications

## Getting Started

1.  Fork [this repository](https://github.com/avametric/front-end-code-challenge)
    to your GitHub account
2.  Clone _your_ fork to your development machine
3.  Install the package dependencies by running `npm install` (or `yarn` if you prefer)
4.  Start the application server by running `npm start`
5.  Open your browser to http://localhost:3000

## Submission

Email us once you have finished and send us the URL to your fork of this repository.
If you are not already in contact with one of us, you can send your email to
[avantha@avametric.com](mailto:avantha@avametric.com).

If your fork is not publicly available, just let us know and we will send you the
GitHub users you can give direct access. Feel free to create a throwaway GitHub
account if you are worried about others seeing that you are working on your Avametric project.

## Expectations

We realize that there is no way to complete a fully polished application for the
purposes of a code challenge. You have other stuff going on in your life, so focus
on the things that best demonstrate your skill and passion. If you are more
comfortable in the user interface, then concentrate there. If you like working
deeper in the code, then concentrate there and don't worry so much about making
a pretty UI.

You are encouraged to include some notes about the aspects you didn't get time
to complete and how you would plan to further develop/improve the application
given more time. Please include them in the bottom of this readme rather than in an email so that others can see them when we share your work internally.

We are looking for creativity, originality, and a good user experience in your
**application** if that's an area you focused on.

We are looking for readability, good architectural decisions, modularity, and a
solid approach to testing in your **code**.

## Found a Bug?

Congratulations! You get bonus points! Email us or submit a GitHub issue
(or even better, a pull request) and we'll get it fixed. Suggestions to improve
this code challenge are also very welcome.

## API

This NodeJS application provides a single way of requesting data.

The **[Mock API](#mock-api)** is served through http://localhost:3000/api/.
You might want to use this if you're interested in UI/UX development. It's the
fastest way to get usable data on the screen, and does not require an internet
connection. The available endpoints are [documented below](#mock-api).

### Mock API

The mock data API is available through http://localhost:3000/api/, which is
proxied to an express server running on port 3001 that servs the contents of
the `data/` folder. You can make HTTP `GET` requests against the following endpoints:

#### GET /api/partners

Returns an array of partners that can be searched for bodies. For the purposes
of this challenge there are only 3 partners available.

#### GET /api/partners/:partnerId

Returns an object representing the partner with the given `:partnerId`.

For example:

```
http://localhost:3000/api/partners/acme/
```

#### GET /api/partners/:partnerId/bodies

Returns an array bodies grouped by gender contained within the partner.

For example:

```
http://localhost:3000/api/partners/acme/bodies
```

#### GET /api/partners/:partnerId/bodies/:genderId

Similar to `/api/partners/:partnerId/bodies`, but returns only a single gender body set
object for the `:genderId` given.

For Example:

```
http://localhost:3000/api/partners/acme/bodies/female
```

## Your Notes Go Here

####Miranda's Notes on take home Avametric challenge.

####Changes made to original code

- I needed to enable cors on the backend so I could make http requests to the server.
- I decided to go with create-react-app's webpack.

####To get it started:

- fork this repo to your github.
- clone onto your local machine.
- cd into the main folder.
- run `npm install` to install packages for the api.
- In one terminal tab, cd into the api folder and run `node server.js` or `nodemon server.js` (if you have nodemon installed globally).
- In another terminal tab cd into the 'frontend' folder.
- run `npm install` to install dependencies for the client-side application.
- run `npm start`.
- The frontend application is running on `localhost:3000`.
- Thank you for viewing my app!

####Technologies/packages used for challenge:

- React for the client-side framework
- Jest and Enzyme for testing
- Axios for making api calls

####Here are things I would have done if this were a real on-the-job project / if I had more time:

- refactor some of the component did mount (initialization)
- further tailor the brand recommendations (for size and specific measurements(bra size) along with more information on the companys and why work for the users body)
- use a state management system like redux to centralize the app state and make it easier to transition between questions
- fancier UX, especially transitions
- more testing

Thank you so much for this opportunity and I look forward to hearing from you soon!

-Miranda

## License

This project is MIT licensed. This means that you are allowed to freely use this for your personal portfolio.
