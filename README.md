<<<<<<< HEAD
# Welcome to flight service

## To set up the project :-
=======
#Welcome to flight service

##To set up the project :-
>>>>>>> 95effcd36f44b161220a330a0d8781826c2574c6
  - clone project on your local
  - execute `npm install` on the same path as the root directory of your downloaded project to install dependencies and packages
  - create `.env` file in your root directory of the project and add following environment variables-
    - `PORT = 3000`
  - inside `src/config` folder, create a `config.json` file and add the following code in it-
    ```
    {
      "development": {
        "username": "<YOUR_DB_NAME>",
        "password": "<YOUR_DB_PASS>",
        "database": "Flight_Search_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }

    ``` 
  - Once you have done all the above steps, run `npx sequelize db:create` in your shell to create the databse.  
