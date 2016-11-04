# Sighthound

#### Technologies Used
* Rollup + Buble for compiling ES2015 code down to ES5
* Stylus + HelpfulUI for writing clean, modular CSS.


## Set Up

  Install dependencies with `npm install`, then launch dev mode with `npm run dev:start`.


Technical Stack:
  - [Firebase](https://firebase.google.com/docs/)
    - Firebase will cover our backend, db, & hosting. It will save us time getting the project and basic functionality (such as user accounts) setup. We'll likely be using their [React library](https://github.com/firebase/reactfire) to save time setting up basic components as well.
  - [Material-UI](https://www.npmjs.com/package/material-ui)
    - This is our front-end UI framework. Google's Material Design is a tested & proven set of interactive design paradigms. Using this has and will save us time on design and ensure we're using interactions and components users are already familiar with, improving usability.
  - [Stripe](https://stripe.com/subscriptions)
    - Stripe has the easist payment API available and includes support for subscription plans. The cost of Stripe is simple and affordable - no monthly dues.
  - [Twilio](https://www.twilio.com/docs/libraries/node)
    - If we do in fact decide to offer text notifications, Twilio is pretty much the clear leader in this space and our only option.

