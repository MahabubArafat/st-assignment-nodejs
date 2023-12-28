# Assignment for Node.js Developer position

## Project setup and Prepare for connecting to DB

Clone the repo and `cd` into it .

Install Dependencies :

```
npm install
```

To connect the db :

- Go to `config/default.json`
- Replace username and password with your username and password in `mongoCloudURI` :

```
  "mongoCloudURI": "mongodb+srv://username:password@cluster-st.t4mhodp.mongodb.net/?retryWrites=true&w=majority"
```

---

## For running the API

```
npm start
```

Health Check:

- Hit this endpoint `http://localhost:3000/`
- If you get this response, Then api is running and healthy
  > API is responding and Healthy...

## Search endpoint

- Hit this endpoint `http://localhost:3000/search?keyword=value`
- Replace `value` with any keyword
- If match is found then you will get an array of posts containing the searched keyword
- If no match is found, then an empty array will be returned

Example :

```
curl http://localhost:3000/search?keyword=ipsum
```

Database entry for `ipsum` in keywords
![Keyword Entry](resources/keyword.png)

Database entries where keyword `ipsum` was matched (9 matches) stored results, with reference to `ipsum` from keywords.
![Matches with reference](resources/matches.png)

### Notes

- Didn't use validators for keyword , as the api is pretty straight forward
- Didn't write any kind of sorting for response, or pagination
- Used cloud database, for resource constraints
