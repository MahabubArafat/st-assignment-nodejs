# Assignment for Node.js Developer position

## Project setup and Prepare for connecting to DB

Clone the repo and `cd` into it .

Install Dependencies :

```
npm install
```

To connect the db :

- Go to `config/default.json` .
- GO to mongo cloud and copy your cluster's connection string and paste it .
- Don't forget to put your username and password in `mongoCloudURI` after pasting it

```
  "mongoCloudURI": "mongodb+srv://username:password@cluster-st.clusterName.mongodb.net/?retryWrites=true&w=majority"
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

---

Example :

```
curl http://localhost:3000/search?keyword=ipsum
```

- The data fetched from <a href="https://jsonplaceholder.typicode.com/posts"> external api </a> , is stored [here](./resources/externalAPIdataSample.txt)

- Response Sent: (where `ipsum` matched fetched data)

```JSON
[
  {
    "userId": 2,
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    "userId": 3,
    "id": 22,
    "title": "dolor sint quo a velit explicabo quia nam",
    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    "userId": 3,
    "id": 25,
    "title": "rem alias distinctio quo quis",
    "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
  },
  {
    "userId": 4,
    "id": 37,
    "title": "provident vel ut sit ratione est",
    "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
  },
  {
    "userId": 4,
    "id": 40,
    "title": "enim quo cumque",
    "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
  },
  {
    "userId": 5,
    "id": 44,
    "title": "optio dolor molestias sit",
    "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
  },
  {
    "userId": 8,
    "id": 73,
    "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
    "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
  },
  {
    "userId": 9,
    "id": 87,
    "title": "nostrum quis quasi placeat",
    "body": "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
  },
  {
    "userId": 10,
    "id": 94,
    "title": "qui qui voluptates illo iste minima",
    "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
  }
]


```

- Database entry for `ipsum` in keywords collection
  ![Keyword Entry](resources/keyword.png)

- Database entries where keyword `ipsum` was matched (9 matches) stored in results collection, with reference to `ipsum` from keywords collection.
  ![Matches with reference](resources/matches.png)

---

Exmaple 2 : Where entered keyword did not find any match , an Empty array was returned
![Search With No Match](resources/search%20with%20no%20match.png)

### Notes

- Keyword Validation: Assuming the keyword will be only Alphabetic only. It can be changed on requirements.
- Didn't write any kind of sorting for response, or pagination
- Used cloud database, for resource constraints
- The mongoCloudURI is not exposed, This was only added to version control for testing the code in local environment, and the cluster was deleted before pushing the code into Github.
