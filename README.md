## About this app
- This app was build with java 17 and springboot framework version 2.5.6. Be aware that you need the right version of java and springboot set up in you local machine if you want to run in your local machine.

- It is connected to postgres database using hibernate technology. `spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect`. Make sure to have the right dependencies to run the app at your local machine.
- It is connected with the frontend.
- The security configuration is running in the backend with the support of jwt security technology.
- If you want to test the app using postman, be aware in which port is running the app in you local machine. 
- To give you an instruction how to use this app, I will normally run at port 8080. 

## How use this app as user. 
1. To sign up or create new user via postman you need to POST/send the bellow json example information to the next url:
   - POST http://localhost:8080/users/register
          ```json 
         {"username":"EdwinRodriguez",
          "password":"edwin",
          "email":"edwin@gmail.com",
          "phone":"0638497678",
          "name":"Edwin Rodriguez Valle",
          "lastName":"Rodriguez Valle",
          "birthdays": "19780810",
          "gender": "masculino",
          "address": "camera 14"}
         ```
         It will create a new user with the role usuario and the following output with status 200:
      ```json
      {
        "id": 3,
        "username": "EdwinRodriguez",
        "email": "edwin@gmail.com",
        "phone": "0638497678",
        "name": "Edwin Rodriguez Valle",
        "lastName": "Rodriguez Valle",
        "brithdays": "1970-01-01T05:29:40.810+00:00",
        "gender": "masculino",
        "address": "camera 14",
        "roleEntities": [
          {
            "id": 2,
            "name": "USER",
            "description": "Usuario"
          }
        ]
      }
      ```

2. To sign in your account you need to authenticate yourself by posting your username and password in the next url:
   - POST http://localhost:8080/users/authenticate
       ```json
       {"username":"EdwinRodriguez",
        "password":"edwin"}
     ```
It will generate for you a token witch you need to submit via postman in order to use the other apis. Save it in the environment of postman to stay log in
      ```json
              {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJFZHdpblJvZHJpZ3VleiIsInJvbGVzIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzAwNTc2ODIzLCJleHAiOjE3MDA1OTQ4MjN9.G1gksIFOcw6otIRBDygZkdj0e7n3IlaYrkITH7hvzew"
              }
      ```
3. To use the other APIS as user you need to be logged. To achieve that, you need to copy this token and paste in the "bearer token" filed in postman. 
   It will allow you to keep authenticated and use the other apis AS A USUARIO. To access the protected apis just for admin , you need to be register or have the permision of admin.
    - Go to postman -> authorization -> type (select bearer token) -> Bearer token -> paste the token in the right token field, just the token without "" -> in the body send you usermane  and password in json format to use user endpoints.
    - GET http://localhost:8080/users/hello-user // to test as user
      ```json
        {  
         "username":"EdwinRodriguez",
          "password":"edwin"
          }

      ```
      output: "All users can read this"
    - 
## How to use this app as admin/user
1. To sign up or create new user/admin via postman you need to POST/send the bellow json example information to the next url. In this case you need to assign the role:
   - POST http://localhost:8080/users/register
    ```json 
      {"username":"Edison",
       "password":"edison",
       "email":"edison@gmail.com",
       "phone":"063890876",
       "name":"Edison",
       "lastName":"Gonzales Victoria",
       "birthdays": "19800917",
       "gender": "masculino",
       "address": "holanda 156",
      "roleEntities": [
         "ADMIN", "USER"
      ]
   }
   ```
2. Post your username and password in the following url:
   - POST http://localhost:8080/users/authenticate
        ```json
        {
        "username":"Edison",
        "password":"edison"
        }
        ```
     
     token output: token
   ```json
      {
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJFZGlzb24iLCJyb2xlcyI6IlJPTEVfVVNFUiIsImlhdCI6MTcwMDU3OTc0NCwiZXhwIjoxNzAwNTk3NzQ0fQ.KV3HDuQEMtlj8NoH6wYWJKbBHdADACV9yAwU6xhkfuc"
      }
   ```
   
3. Test your admin privileges with your token create as admin
   - Go to postman -> authorization -> type (select bearer token) -> Bearer token -> paste the token in the right token field, just the token without "" -> in the body send you usermane  and password in json format to use user endpoints.
   -  GET http://localhost:8080/users/hello-admin-user
   ```json
     {
    "username":"Edison",
    "password":"edison"
     }
   ```
   "output": "Only Admins and Users Can Read This"
   