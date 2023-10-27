# Consuming React Wrapper Components

This example application demonstrates the usage of the React Wrapper Components based on our Stencil web components. Additionally, it serves for testing purposes.

## Run locally

To run the React + JS app locally using the wrapper components, you need to either create a .env file with following content: ```GENERATE_SOURCEMAP=false```
or update the ```npm start``` script in the package.json to the following: ```"start": "GENERATE_SOURCEMAP=false && react-scripts start"```

### Using Stencil components from npm package (link to local Stencil library)

 ```bash
 npm install
 npm run test:local
 ```


### To run the application using the latest version of the React Library on NPM:

 ```bash
 npm install
 npm run start
 ```

 The application will be served on http://localhost:3000.