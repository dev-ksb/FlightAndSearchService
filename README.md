# Flights Service

## Project Setup
 - Clone the project on your local
 - Run `npm install` on the root level of directory
 - create `.env` file in the root directory and add the folling environment variables
   - `PORT=3000`
 - Inside `src/config` folder create a new file `config.json` and add the following json

```json
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once above steps performed, go to the src folder from terminal and execute `npx sequelize db:create`