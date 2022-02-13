# NoSQL Social Network API

## Table of Contents

- [Summary](#Summary)
- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Seed the data](#seed-the-data)
- [Usage](#Usage)
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

<a name="video-walkthrough"></a>

## Video Walkthrough

Click [here](https://drive.google.com/file/d/1aiBXw9HOSrFSPMXvBw3UhTdr1OYQLiTQ/view?usp=sharing) to access the Video Walkthrough.

<a name="questions"></a>

## Questions

If you have any question or suggestion, please fell free to get in touch with me by:

Email: [luizfroes@gmail.com](mailto:luizfroes@gmail.com)

GitHub: [luizfroes](https://github.com/luizfroes)
