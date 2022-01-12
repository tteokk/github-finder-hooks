# udemy-f2b-1
udemy react front to back project 1

to get started
npx create-react-app .
# dot puts it in current folder

dependencies
react-dom allows us to render application in browser within dom
react-scripts

test script to run tests

index.html
react is spa framework
everything is routed thru single file, index.html
<div id ="root"> this is where the entire react app component gets outputted

source folder src
index.js
import app from app

react dom render takes in what u wanna render, app component imported, and where u wanna render it in the html file

u don't deploy anything from src file, u deploy static assets that r created when u run npm

npm run build creates a production build
shows static files that will actually be deployed

components can be functions or classes
class components can have state
hooks now allow to have state within functional components