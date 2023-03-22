# Vanilla js example application

This example application demonstrates the usage of some of our Stencil web components. Additionally, it serves for testing purposes.

The `index.html` at the root of this example application includes the CDN link to the latest npm package. 
For testing purposes, however, we want to use the locally built Stencil components. 
When not working on the Master branch, per default, the CDN link will point to the locally built components in the ```dist``` folder.
To test the compiled components locally, follow the steps below.

## Run locally

### Using Stencil components from npm package (on master branch)

```npm run start```

### Using Stencil components from local package (for testing purposes)

 ```npm run get:dist```

 This builds the Stencil components and copies the dist folder to the Vanilla example application.
 If the link in the ```index.html``` points to the npm package, run following command to switch to the local link:

 ```npm run update-link```

Else run ```npm run start```.