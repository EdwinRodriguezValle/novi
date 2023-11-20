# Documentation APIS

## How to use this app 

1. You will need to crear your user in the next url:
   a) http://localhost:8080/users/register
   b) send data in json format for instance see bellow: 
         
```json 
          "username":"Eli",
           "password":"Eli",
           "email":"eli@outlook.com",
           "phone":"0788497956",
           "name":"Eli",
           "roleEntities": [
           "ADMIN", "USER"
           ]}`
        ```
2. With your username and your password you need to login by post with the method POST in the following url:
   a) http://localhost:8080/users/authenticate
    ```json
    {  "username":"Eli",
        "password":"Eli"
    }
    ```

```json
        {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJFbGkiLCJyb2xlcyI6IiIsImlhdCI6MTY4OTM2NzI2NiwiZXhwIjoxNjg5Mzg1MjY2fQ.e8B1S2J8DHV3tZWNF8AL-LoPvaH8ph3yeyPT9rOMIrk"
        }
```

If you are testing via Post man, copy and paste the generated token in "bearer token". It will allow you to login and use the other APIS

3. To use the other APIS you need to be logged. 