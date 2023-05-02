# Vanilla js example application

This example application demonstrates the usage of some of our Stencil web components. Additionally, it serves for testing purposes.

The `index.html` at the root of this example application includes the CDN link to the latest npm package. 
For testing purposes, however, we want to use the locally built Stencil components. 
When not working on the Master branch, per default, the CDN link will point to the locally built components in the ```dist``` folder.
To test the compiled components locally, follow the steps below.

## Run locally

### Using Stencil components from npm package (on master branch)

```npm run dev```

### Using Stencil components from local package (for testing purposes)

 ```npm run dev:watch```

 This command listens to changes to the Stencil components. If the ``dist`` folder at the project root has changed, it gets copied to the Vanilla example application. Vite is configured to automatically reload the ```index.html``` in the browser when changes are made to files in the ``dist` folder. 

 If you have checked out the master branch, the link in the ```index.html``` points to the npm package. Run the following command to replace it with the local link, before running the application.

 ```npm run update-link```
