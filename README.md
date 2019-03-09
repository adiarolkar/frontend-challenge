# FinCompare Front-end Challenge

The purpose of this challenge is to let the developer show familiarity and skills with frontend technologies by creating a simple app using what its judges best, regarding patterns, libraries, and architeture.


## The Challenge

We'll use the [Ergast API](http://ergast.com/mrd/) to create a single page application that
presents a list that shows the F1 world champions starting from 2005 until
2015. Clicking on an item shows the list of the winners for every race for
the selected year. We also request to highlight the row when the winner
has been the world champion in the same season.

Feel free to create the UI the way you think it's best, just make sure it's clean, understandable and it's a single page application. The main goal here is to check your skills with CSS or whatever you use to style your project.

## Delivery

Please use Github to send us your challenge, if you could fork this repo would be even better.

## Extra

- You can use any Javascript library you want, but we would rather if you use React
- Write a readme file explaining4 what you did, what you used and how to run your project.

<!--- Aditya Arolkar Front End Solution for FinCompare -->
## Solution
Based on the Front End Assignment that I was given, I have mentioned the description, tools, steps and my experience while working on the assignment.

Tools and libraries:
  •	Framework:
    React 16.7.0
    Webpack 4.29.0
    @babel/core 7.2.2
  •	Browser: Chrome
  •	Text Editor: Atom
  •	Other libraries and dependencies like lodash etc.

-	Requirement Gathering
To create a Front end that presents a list that shows the F1 world champions starting from 2005 until 2015, I first checked the [Ergast API] and the endpoints by which I can get my required data.

- Analysis and framework selection
After I analyzed the problem statement and how it could be solved, I checked which all frameworks would be suitable for this project and finalized on React JS. Considering this is a single page application and there are several events to be handled on the same page without refreshing, the states and props maintained in React JS would be very helpful.

- Initialize
I first started with creating a React BoilerPlate with React, Webpack, babel and few other basic libraries configured and installed using npm. I also installed sass loader as a good practice for handling CSS.

- Skeleton Development
After making the necessary setup, I wrote down the flow of components on a piece of paper to get a better visual of how the structure of the project should be. With the BoilerPlate in place, I started creating a structure or skeleton to hit the API and get data on the webpage.

- Logic and Working
The main logic of this application appears to be in <PageYear/> file. This component fetches all the races from year 2005 to 2015 and once a year is clicked it passes the data to its child component <Season/>. This Component get year of season as prop and fetches the data with another api for that particular year and maps it on the page with help of <Race/> Component. This Component formats the data for each race.

Also, to get the champion of Each season, I have fetched response from <PageYear/> component which saves a key value pair of "year" and "Champion name" in an object and passes it to <Season/> component to check the champion for the year clicked by the user.

-	Style (SCCS)
Once this structure was in place, I installed Bootstrap and started with styling the website. I referred the official website of formula1[https://www.formula1.com/] for getting ideas for color theme of the application. I have separated the SCSS code snippets and kept only necessary code in each file for better management and maintenance. I have also added variables to change the color theme of the website from a single file. With a simple design, I have added minimal style for this project.

-	Responsive
I made sure the application is responsive and cross browser friendly. So, I tested it on different browsers to make sure it is looking aesthetically accurate. With few media queries, the page was made responsive for all devices and screens.

-	Code cleaning and Final Fixes
It’s a good practice to remove unwanted code from the repository and keeping clean and understandable code. I made sure to break down the components further to make them close to Higher Order Components (HOC). I also tested the application manually and made some final fixes and UI changes.

Steps to run the project:

1.	Node and NPM would be required to run this application on your local system. You can install it from: https://www.npmjs.com/get-npm
2. 	Open terminal.
3.	Go to a directory where you would like to clone the project.
4.	Enter command: ‘git clone https://github.com/adiarolkar/frontend-challenge.git’ in the terminal and hit enter.
5.	Once the project is cloned, enter in the project directory.
6.	Enter command ‘npm install’ and hit enter.
7.	After all the required libraries are installed, enter command ‘npm start’ and hit enter.
8.	The browser will automatically open the URL and run the project.
