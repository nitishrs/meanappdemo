#MEAN APP DEMO#
Welcome to my MEAN stack app done with the help of *pluralsight* tutorial


===========
###Changes as of 19/01/2016
1.  Restructured the server.js code into the config directory containing 4 files - config,express,mongoose and routes
1.  Partials directory under views is now moved to public/app - account and main folders


===========
###Changes as of 22/01/2016
1.  Added passport local strategy to verify username
1.  Print in console whether login is valid or not


===========
###Changes as of 23/01/2016
1.  Removed print in console
1.  Added a service mvToastr from Toastr library to display login messages
1.  Refactored the login route to auth.js
1.  Logout code added

===========
###Changes as of 01/02/2016
1.  Server.js code refactored
1.  Persistent login implmented
1.  Roles added, admin role working

===========
###Changes as of 02/02/2016
1.  User list authorization added

===========
###Changes as of 18/02/2016
1.  Added Sign Up functionality
2.  Made respective changes to schema by adding validations

===========
###Changes as of 20/02/2016
1.  Added 'my profile' page, not part of the tutorial
2.  Added 404,403 error pages and respective changes locationProvider and routeChangeError objects

>May the force be with me