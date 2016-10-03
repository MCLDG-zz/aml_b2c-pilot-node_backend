var swagger = require('swagger-tools');
var swaggerObject = require('./api/swagger.json'); // This assumes you're in the root of the swagger-tools

var connect = require('connect');
var http = require('http');
var app = connect();

// Initialize the Swagger Middleware
swagger.initializeMiddleware(swaggerObject, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Provide the security handlers
  app.use(middleware.swaggerSecurity({
    oauth2: function (req, def, scopes, callback) {
      // Do real stuff here
    }
  }));

  // Validate Swagger requests
  app.use(middleware.swaggerValidator({
    validateResponse: false
  }));

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter({useStubs: true, controllers: './controllers'}));

  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(3001);
});
