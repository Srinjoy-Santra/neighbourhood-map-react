This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Overview
The project is a single page application featuring a map of [Park Street,Kolkata](https://en.wikipedia.org/wiki/Park_Street,_Kolkata) neighborhood. The functionalities to this map include highlighted locations (eating places), third-party data about those locations and various ways to browse the content.

## How to run the application?

- Clone the git repository:
$ git clone https://github.com/Srinjoy-Santra/neighborhood-map-react

- Change directory to the project, install npm and run the application:

> npm install

> npm start

The npm start command will automatically open the application in the browser.

- To start the service worker run:

> npm run build

> serve -s build

Navigate to http://localhost:3000/.


## Development Strategy

- API key was obtained from Google Maps API.
- Full screen map was added to the page.
- Map Markers were dropped at a list of locations.
- [FourSqaureAPI](https://developer.foursquare.com/) was used to fetch additional data for each such location
- Search functionality was added for the locations.
- Basic styling was done using CSS




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Screenshot
![Sample Demo](https://github.com/Srinjoy-Santra/neighbourhood-map-react/blob/master/screenshot.PNG)
