Quick Force Node
----------------

The quickest and easiest way to start a Node web app that uses the Force.com REST APIs.

This application has everything you need to start building web apps that use the Force.com REST APIs.  How it works:
* Instant deployment on the cloud with Heroku
* Everything for local development including: Node & the Atom code editor
* Super easy deployment of changes using Atom (no git or command lines necessary)

Go for it:

1. [![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2. Follow the instructions in your newly deployed application to setup the OAuth Connected App in Salesforce and set the config in your Heroku app
3. Setup a local development environment by downloading your app's source: https://download-heroku-source.herokuapp.com/
4. Unzip the archive and launch `gulp` - this will launch Atom and the Node server
5. Again follow the instructions in your local app to setup another OAuth Connected App for local development
6. Make and test some local changes to the app
7. Deploy those changes from Atom using the Heroku menu (Login, then Deploy)
