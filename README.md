

**A testbed app using a React+Backbone frontend, and Node+MongoDB backend**
-----------------------------------------------------------------------

    "frontend_dependencies": {
        "flux": "~2.0.2",
        "requirejs": "~2.1.15",
        "react": "~0.12.2",
        "backbone": "~1.1.2",
        "bootstrap": "~3.3.1"
      },
    "backend_dependencies": {
        "gulp": "^3.8.10",
        "gulp-requirejs": "^0.1.3",
        "gulp-react": "^2.0.0",
        "mongoose": "^3.8.21",
        "mongodb": "^1.4.25",
        "gulp-watch": "^3.0.0"
      }


----------

To Run Local Mongo DB
---------------
1. `cd` into repo
2. run command `cd ./server/mongo/ && mongod`

To Run Local Node Server
------------------

1. `cd` into repo
2. run command `cd ./server && node server.js`


To Develop Javascript
----------
1. `cd` into repo
2. Run `gulp watchJSX`

To Build Production Javascript
------------------------

1. `cd` into repo
2. Run `r.js -o build.js`
