# Hilton Hotel Coding Challenge

***Setup Instructions***
1. To run the app clone repo and run yarn(or npm install).
2. Run '$ yarn start' to start the GraphQL server on port 4000.
3. CD into mobile directory and run yarn(or npm install).
4. Run '$ react-native run-ios' to start RN server and run app in iOS simulator.


## Challenge Requirements
The ask is to create a mock reservation system. You will build two apps, the first is to provide an API for the reservation system, the second, will be a react-native app that uses the API.
 
The Tech Stack:
* React
* React-Native
* Express
* GraphQL - Apollo
* Nodejs
 
 Step 1:
 Using GraphQL, create an Express app that simulates a basic reservations system. Use node 8.x.
 
A reservation should have the following fields:
* name
* id
* hotelName
* arrivalDate
* departureDate
 
It should support the following methods and paths:
* GET /reservation/ID – Returns a single reservation with ID
* POST /reservation – Creates a new reservation, assigns an ID to it, and returns that ID
* GET /reservations – Returns all reservations
 
Step 2:
Create a React-Native IOS app that uses pure react components to provide a working UI for the reservation API created in step 1.
 
Bonus:
Use flow to statically type check your code.
