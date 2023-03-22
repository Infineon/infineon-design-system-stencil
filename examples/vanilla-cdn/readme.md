# Vanilla js example application

This example application demonstrates the usage of some of our Stencil web components. Additionally, it serves for testing purposes.

The `index.html` at the root of this example application includes the CDN link to the latest npm package. 
For testing purposes, however, we want to use the locally built Stencil components. 
Under the subfolder `local` there is another `/index.html`, which points to the `dist` folder with the compiled components.
To copy the compiled components to the example application, follow the steps below.

## Run locally

### Using Stencil components from npm package

```npm run start```

### Using Stencil components from local package (for testing purposes)

 ```npm run get:dist```

 This builds the Stencil components and copies the dist folder to the Vanilla example application.

 ```npm run update-link```
