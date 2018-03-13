# Game of Drones API

### Getting started

Clone this repo into your preferred location.

### Requirements

1. Node 7.6+
2. Mongo 3.6+

### Running Mobile Client

1. From the project root, run `npm install`

**Using the remote server (a)**

3. There's a live server already set up running at `https://hotelrapi.herokuapp.com/`

**If you want to run a local server (b)**

3. To run in development mode, you need to initialize your local mongo driver. [Install mongo](https://docs.mongodb.com/manual/installation/) if you haven't already, create a `~/data/db` directory and run `mongod` to initialize driver and listen for incoming connections at `mongo://localhost`
4. From the project root directory, run `npm run load-weapons`. This will initialize sufficient documents to test the game.
5. Run `npm run dev`. This will set up a server running on `http://127.0.0.1` connected to the local mongo database.

### Using the REST API

1. The API root is `:hostname/api/v1/`.

If using remote server, you can browse the full API documentation [here](https://gofdrones.herokuapp.com/api/v1/docs/#/).

If using a local server, you can browse it [here](http://127.0.0.1:5000/api/v1/docs)

### Available endpoints

***1. Get weapons:***

**Endpoint:** `GET /weapons`\
**Headers:** none\
**Query Params:** none\
**Path Params:** none\
**Body:** none


**Note:** The `master` branch on the Client uses the Heroku server (a). If you want to easily switch to a local server (b), use the `local-server` branch on the client.
