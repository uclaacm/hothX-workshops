# Intro to Backend: Databases

**Date**: February 10, 2022

**Teacher**: [Satyen Subramaniam](https://github.com/subramaniamsatyen)

Welcome to the HOTHX databases workshop!

## Resources
- [Slides](https://bit.ly/HOTH-X-Databases)
- [Recording](TODO)

## Topics Covered
- [What Databases Are](#what-are-databases)
- [Types of Databases](#what-are-some-implementations-of-databases)
- [Choosing a Database](#how-do-i-choose-a-database)
- [Example Databases](#example-databases)
- [Firebase Demo](#walkthrough:-required-tech-stack)

## What are databases?
A database is can be defined as structure for storing information in an highly accessible, persistent, scalable, secure, and reliable way. A simple way to visualize a database is as a table or excel spreadsheet.  

## What are some implementations of databases?
Generally all databases are defined by their **configuration** and their **data**. When configuring a database, we divide the two most popular designs into **relational** databases and **non-relational** databases.

A relational database follows the model of a table or excel spreadsheet very closely - and for our purposes can be visualized as such. Relational databases store their data as records: each piece of data corresponds to a row in a table. Notably, relational databases support configuring and enforcing relationship on a single table (ex: an ID must always be unique, no rows can be deleted, etc.), as well as between tables (ex: foreign keys, etc.). Relational databases are also ACID (Atomic, Consistent, Isolated, Durable) - essentially meaning all operations on the database will be carried out instantaneously and uniformly. 

A non-relational databases follow a different model: instead of a spreadsheet, think of a cork board with colored sticky notes posted on it. The entire board can be likened to a table, while each sticky note is akin to the idea of a row in a table - storing a piece of data. Non-relational databases store data in **documents**, in our analogy the sticky notes, and group documents together in **collections**, the entire cork board. Non-relational databases allow for very fast retrieval of existing data - akin to knowing and visually identifying a colored sticky note, rather than searching through a table for an entry.

## How do I choose a database?

The advantages of a relational database are as follows:
- Relational
- Integrity
- Reliability
- Security
- ACID Compliance
- Transactable
- Programmability

The advantages of a non-relational database are as follows:
- Scalability
- Open Source
- Efficient
- Data Complexity
- Simplicity (Setup + Management)

For a simple web application we strongly encourage choosing a non-relational database.

## Example Databases
- Relational
    - Microsoft SQL Server
    - MySQL
    - Microsoft Azure SQL Database
    - Oracle
    - PostgreSQL
- Non-Relational
    - MongoDB
    - Firebase
    - Redis
    - Elasticsearch
    - DynamoDB
    - Neo4j

## Walkthrough: Required Tech Stack

For this demo we'll be using `React` and `Node.js` for our web application, and `Firebase` for our database. To get started with React, you'll need to have to have `Node.js` installed, which you can verify by opening a terminal/command prompt and typing the command:
```
node -v
```
If you've got `Node.js` installed, this should display something of the form `vXX.XX.X` - the version number. Otherwise, follow the directions here to install the latest LTS version (https://nodejs.org/en/download/).

You'll also need a text editor (we recommend Visual Studio Code - https://code.visualstudio.com/Download) of your choice and a google account.

## Walkthrough: Setting up Firebase

1) Navigate to Firebase (https://firebase.google.com/) and click 'Get started'
2) Sign into your google account
3) Click 'Add project'. Enter a project name and continue with the default settings
4) Click on the Web App icon '</>' on your project's home page. Copy the javascript code for later reference
5) Expand the 'Build' menu and click 'Firestore Database' (NOT 'Realtime Database')
6) Click 'Create database'. Choose **start in test mode** when prompted and continue with the default settings.


## Walkthrough: Manipulating Data on Firebase

1) Navigate to Firestore Database under the 'Build' menu of your project
2) Click 'Start collection' and provide 'Animals' as your collection name
3) Fill in 'Lion' as the Document ID with the following fields 
	- Field: animal, Type: string, Value: Lion
  	- Field: nickname, Type: string, Value: Meowie
  	- Field: age, Type: number, Value: 3
4) Optional: Add additional animals with the same fields

## Walkthrough: Starting with React

1) Open your text editor and terminal. Type the command `npx create-react-app databasedemo`
2) In the same terminal type `cd databasedemo`
3) In the same terminal type `npm start`
4) Take a short break and watch your react app start up :)


## Walkthrough: Connecting to Firebase with React

1) Stop your app by pressing both `Ctrl` and `C` (if on Windows) or `Command` and `.` (if on Mac)
2) In the terminal type `npm install firebase`
3) Create a `firebase.js` file in the `src` folder of the new project
4) Paste your copied firebase configuration into the empty file
5) Add the following line at the top of the `firebase.js` file
```Javascript
import { getFirestore } from "firebase/firestore";
```
6) Add the following lines to the bottom of the `firebase.js` file
```JavaScript
const db = getFirestore(app);
export default db;
```
7) Navigate to your `App.js` file. Add the following lines at the top of the file (the first imports functions to manipulate our database, the second imports our database connection, and the third allows us to make use of the react state hook)
```JavaScript
import { doc, setDoc, getDoc } from "firebase/firestore";
import db from "./firebase";
import React, { useState } from 'react';
```
8) Remove all the content between the `<header>` and `</header>` tags
9) Add the following lines to the `App.js` file below the import statements (defining a class to act as our document schema)
```JavaScript
class Animal {
	constructor(animal, nickname, age) {
		this.animal = animal;
		this.nickname = nickname;
		this.age = age;
	}
}
```
10) Add the following lines to the `App.js` file below the previous class (defining a converter to aid in converting between JavaScript class and Firebase representation)
```JavaScript
const animalConverter = {
	toFirestore: (user) => {
		return {
			animal: user.animal,
			nickname: user.nickname,
			age: user.age,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Animal(data.animal, data.nickname, data.age);
	}
};
```
11) Add the following line to the `App.js` to the start of the `App()` function body
```JavaScript
const [currAnimals, setCurrAnimals] = useState({});
```
12) Add the following below the previous line of code (this function calls our database, converts it to an `Animal` object, and stores it in `currAnimals`). Here you'll have to replace
```JavaScript
const fetchAnimals = async () => {
    const docRef = doc(db, "Animals", "Lion")
					.withConverter(animalConverter);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    setCurrAnimals(docSnap.data());
  };
```
13) Add the following lines between the `<header>` and `</header>` tags 
```JavaScript
<div> My Animal: {currAnimals.animal} </div>
<div> My Nickname: {currAnimals.nickname} </div>
<div> My Age: {currAnimals.age} </div>
```
14) Return to the terminal (or create a new one) and run `npm start`. Make sure your in the databasedemo project folder (or the command won't work).

## Walkthrough: Persisting Data Through React
1) Add the following lines of code below to the `App.js` file under the `App()` function body alongside your previous state declarations (this will create a state variable to store the user input)
```JavaScript
const [newAnimal, setNewAnimal] = useState({
	animal: '',
	nickname: '',
	age: '',
});
```
2) Add the following below the previous state declaration (alongside your previously declared functions) within the `App()` function body (this will handle updating our variable when the user types input)
```JavaScript
const handleChange = (prop) => (event) => {
	setNewAnimal({ ...newAnimal, [prop]: event.target.value });
};
```
3) Add the following line below the previous function (this function will attempt to replace the document with the input animal name with the input details)
```JavaScript
function addToDb(values) {
	const ref = doc(db, "MyFirstCollection", newAnimal.animal)
     		.withConverter(animalConverter);
	setDoc(ref, new Animal(newAnimal.animal,
    newAnimal.nickname, newAnimal.age));
}
```
4) Add the following at the bottom of the section between the `<header>` and `</header>` tags 
```JavaScript
<input value={newAnimal.animal} onChange={handleChange('animal')} />
<input value={newAnimal.nickname} onChange={handleChange('nickname')} />
<input value={newAnimal.age} onChange={handleChange('age')} />
<button onClick={addToDb}>Add to DB…</button>
```
5) Return to the terminal (or create a new one) and run `npm start`. Make sure your in the databasedemo project folder (or the command won't work).

Take a moment to reflect on what you've done! You've learned about what a database is, when they are used, some different types, and have taken the initiative to create one yourself!


## Further Resources
[Adding a Value API](https://firebase.google.com/docs/firestore/manage-data/add-data)

[Retrieving a Value API](https://firebase.google.com/docs/firestore/query-data/get-data)

[Full API](https://firebase.google.com/docs/firestore)

[React Quickstart](https://reactjs.org/docs/create-a-new-react-app.html)

[Similar Walkthrough](https://medium.com/nerd-for-tech/setting-up-a-create-react-app-with-firebase-4fb3601fe2d4)

## As always, Happy Hacking!
