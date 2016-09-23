To add a new user:

curl -X POST --header 'Content-Type: application/json' --header 'Accept: text/html' -d '{ \ 
   "id": 0, \ 
   "username": "peter", \ 
   "firstName": "string", \ 
   "lastName": "string", \ 
   "email": "string", \ 
   "password": "string", \ 
   "phone": "string", \ 
   "userStatus": 0 \ 
 }' 'http://a2ef76710813811e6a2a9023aab840d8-1798826532.us-west-2.elb.amazonaws.com/v1/user'

To get a list of users:

curl -X GET --header 'Accept: application/json' 'http://a2ef76710813811e6a2a9023aab840d8-1798826532.us-west-2.elb.amazonaws.com/v1/user'

To delete a user:

curl -X DELETE --header 'Accept: text/html' 'http://a2ef76710813811e6a2a9023aab840d8-1798826532.us-west-2.elb.amazonaws.com/v1/user/<username>'

