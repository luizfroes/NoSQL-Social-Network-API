# NoSQL Social Network API

## Table of Contents

- [Summary](#Summary)
- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Seed the data](#seed-the-data)
- [Usage](#Usage)
- [Endpoints](#endpoints)
- [Video Walkthrough](#video-walkthrough)
- [Questions](#questions)

<a name="summary"></a>

## Summary

NoSQL Social Network API is social network backend web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

As MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data I used MongoDB database, Express.js for routing, and the Mongoose ODM.

<a name="user-story"></a>

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

<a name="technologies-used"></a>

## Technologies Used

#### Languages

- JavaScript
- JQuery

#### Packages used

- Node.Js
- Express
- MongoDB
- Mongoose
- Date Fns

<a name="installation"></a>

## Installation

If you are interest in contribute to the code, you just need install this repository by following the steps below:

First Step:

Clone this repository, by clicking [here](https://github.com/luizfroes/NoSQL-Social-Network-API). At he right hand side of the page, click on the `code` button and select the way you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git clone git@github.com:luizfroes/NoSQL-Social-Network-API.git
```

Now you just need to open your new cloned project in your chosen source-code editor.

Second Step:

Install all dependencies that are listed in the `package.json` file with the command:

```
npm install
```

Make sure you have your 'start' script in the `package.json`, as shown in the code below.

```
"start": node src/index.js
```

With this you will ensure npm to 'start' the application from your entry file.

<a name="seed-the-data"></a>

## Seed the data

To seed the data follow the steps below:

```
npm run seed
```

<a name="usage"></a>

## Usage

To use the application follow the steps below:

```
npm run start
```

<a name="endpoints"></a>

## Endpoints

### `GET api/users | api/thoughts`

- returns a list of all documents, thoughts or users and all associated schemas (friends and reactions)

Sample response (users):

```json
{
  "success": true,
  "data": [
    {
      "_id": "6209807e651447db602659b6",
      "thoughtText": "NoSQL is killing me",
      "username": "gracekelly",
      "reactions": [
        {
          "reactionId": "6209807e651447db602659b7",
          "reactionBody": "Yes, it is!!",
          "username": "tonyjunior",
          "_id": "6209807e651447db602659b8",
          "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
          "id": "6209807e651447db602659b8"
        },
        {
          "reactionId": "6209807e651447db602659b9",
          "reactionBody": "Really??",
          "username": "carolbaracat",
          "_id": "6209807e651447db602659ba",
          "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
          "id": "6209807e651447db602659ba"
        },
        {
          "reactionId": "6209807e651447db602659bb",
          "reactionBody": "I don't think so!!",
          "username": "bobsmith",
          "_id": "6209807e651447db602659bc",
          "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
          "id": "6209807e651447db602659bc"
        }
      ],
      "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
      "__v": 0,
      "reactionCount": 3,
      "id": "6209807e651447db602659b6"
    }
  ]
}
```

### GET /api/users/:id | api/thoughts/:id

- returns a specific document by it's id

Sample response (user):

```json
{
  "success": true,
  "data": {
    "_id": "6209807e651447db602659b6",
    "thoughtText": "NoSQL is killing me",
    "username": "gracekelly",
    "reactions": [
      {
        "reactionId": "6209807e651447db602659b7",
        "reactionBody": "Yes, it is!!",
        "username": "tonyjunior",
        "_id": "6209807e651447db602659b8",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659b8"
      },
      {
        "reactionId": "6209807e651447db602659b9",
        "reactionBody": "Really??",
        "username": "carolbaracat",
        "_id": "6209807e651447db602659ba",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659ba"
      },
      {
        "reactionId": "6209807e651447db602659bb",
        "reactionBody": "I don't think so!!",
        "username": "bobsmith",
        "_id": "6209807e651447db602659bc",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659bc"
      }
    ],
    "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
    "__v": 0,
    "reactionCount": 3,
    "id": "6209807e651447db602659b6"
  }
}
```

### POST /api/users | api/thoughts

- creates a new document, thoughts or users in the database

Request body example (thought):

```json
{
  "thoughtText": "Here's a cool thought...",
  "username": "bobsmith",
  "userId": "6209807e651447db602659a6"
}
```

Sample response:

```json
{
  "success": true,
  "data": {
    "thoughtText": "Here's a cool thought...",
    "username": "bobsmith",
    "_id": "620a8bf03e56a47e5a2c80ee",
    "createdAt": "Monday February 14th, 2022 @ 05:05:52 p.m.",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0,
    "id": "620a8bf03e56a47e5a2c80ee"
  }
}
```

### PUT /api/users/:id | api/thoughts/:id

- updates a specific a document by it's id

Request body example (thought):

```json
{
  "thoughtText": "Here's a very cool thought..."
}
```

Sample response:

```json
{
  "success": true,
  "data": {
    "_id": "620a8bf03e56a47e5a2c80ee",
    "thoughtText": "Here's a very cool thought...",
    "username": "bobsmith",
    "createdAt": "Monday February 14th, 2022 @ 05:05:52 p.m.",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0,
    "id": "620a8bf03e56a47e5a2c80ee"
  }
}
```

### DELETE api/{users|thoughts}/:id

- deletes a specific document by it's id from the database

Sample response (thought):

```json
{
  "success": true,
  "data": {
    "_id": "620a8bf03e56a47e5a2c80ee",
    "thoughtText": "Here's a very cool thought...",
    "username": "bobsmith",
    "createdAt": "Monday February 14th, 2022 @ 05:05:52 p.m.",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0,
    "id": "620a8bf03e56a47e5a2c80ee"
  }
}
```

### POST /api/users/:userId/friends/

- creates a new friend in a specific user's friends array

Request body example:

```json
{
  "_id": "6209807e651447db602659a6"
}
```

Sample response:

```json
{
  "success": true,
  "data": {
    "_id": "6209807e651447db602659a7",
    "username": "jackswift",
    "email": "jackswift@email.com",
    "thoughts": ["6209807e651447db602659cb"],
    "friends": ["6209807e651447db602659a9", "6209807e651447db602659a6"],
    "__v": 0,
    "friendCount": 2,
    "id": "6209807e651447db602659a7"
  }
}
```

### DELETE /api/users/:userId/friends/:friendId

- deletes a specific friend from a specific user's friends array

Sample response:

```json
{
  "success": true,
  "data": {
    "_id": "6209807e651447db602659a7",
    "username": "jackswift",
    "email": "jackswift@email.com",
    "thoughts": ["6209807e651447db602659cb"],
    "friends": ["6209807e651447db602659a9"],
    "__v": 0,
    "friendCount": 1,
    "id": "6209807e651447db602659a7"
  }
}
```

### POST /api/thoughts/:thoughtId/reactions/

- creates a new reaction in a specific thought's reactions array

Request body example:

```json
{
  "reactionBody": "Fantastic!!!",
  "username": "bobsmith"
}
```

Sample response:

```json
{
  "success": true,
  "data": {
    "_id": "6209807e651447db602659b6",
    "thoughtText": "NoSQL is killing me",
    "username": "gracekelly",
    "reactions": [
      {
        "reactionId": "6209807e651447db602659b7",
        "reactionBody": "Yes, it is!!",
        "username": "tonyjunior",
        "_id": "6209807e651447db602659b8",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659b8"
      },
      {
        "reactionId": "6209807e651447db602659b9",
        "reactionBody": "Really??",
        "username": "carolbaracat",
        "_id": "6209807e651447db602659ba",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659ba"
      },
      {
        "reactionId": "6209807e651447db602659bb",
        "reactionBody": "I don't think so!!",
        "username": "bobsmith",
        "_id": "6209807e651447db602659bc",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659bc"
      },
      {
        "reactionId": "620a8f933e56a47e5a2c814f",
        "reactionBody": "Fantastic!!!",
        "username": "bobsmith",
        "_id": "620a8f933e56a47e5a2c8150",
        "createdAt": "Monday February 14th, 2022 @ 05:21:23 p.m.",
        "id": "620a8f933e56a47e5a2c8150"
      }
    ],
    "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
    "__v": 0,
    "reactionCount": 4,
    "id": "6209807e651447db602659b6"
  }
}
```

### DELETE /api/thoughts/:thoughtId/reactions/:reactionId

- deletes a specific reaction from a specific thought's reactions array

Sample response:

```json
{
  "success": true,
  "data": {
    "_id": "6209807e651447db602659b6",
    "thoughtText": "NoSQL is killing me",
    "username": "gracekelly",
    "reactions": [
      {
        "reactionId": "6209807e651447db602659b7",
        "reactionBody": "Yes, it is!!",
        "username": "tonyjunior",
        "_id": "6209807e651447db602659b8",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659b8"
      },
      {
        "reactionId": "6209807e651447db602659b9",
        "reactionBody": "Really??",
        "username": "carolbaracat",
        "_id": "6209807e651447db602659ba",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659ba"
      },
      {
        "reactionId": "6209807e651447db602659bb",
        "reactionBody": "I don't think so!!",
        "username": "bobsmith",
        "_id": "6209807e651447db602659bc",
        "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
        "id": "6209807e651447db602659bc"
      },
      {
        "reactionId": "620a8f933e56a47e5a2c814f",
        "reactionBody": "Fantastic!!!",
        "username": "bobsmith",
        "_id": "620a8f933e56a47e5a2c8150",
        "createdAt": "Monday February 14th, 2022 @ 05:21:23 p.m.",
        "id": "620a8f933e56a47e5a2c8150"
      }
    ],
    "createdAt": "Sunday February 13th, 2022 @ 10:04:46 p.m.",
    "__v": 0,
    "reactionCount": 4,
    "id": "6209807e651447db602659b6"
  }
}
```

<a name="video-walkthrough"></a>

## Video Walkthrough

Click [here](https://drive.google.com/file/d/1TaGpGaNPoufQHmjHV7jYYEO0mLl9hwjk/view?usp=sharing) to access the Video Walkthrough.

<a name="questions"></a>

## Questions

If you have any question or suggestion, please fell free to get in touch with me by:

Email: [luizfroes@gmail.com](mailto:luizfroes@gmail.com)

GitHub: [luizfroes](https://github.com/luizfroes)
