import logo from './logo.svg';
import './App.css';
import { doc, setDoc, getDoc } from "firebase/firestore";
import db from "./firebase";
import React, { useState } from 'react';


class Animal {
	constructor(animal, nickname, age) {
		this.animal = animal;
		this.nickname = nickname;
		this.age = age;
	}
}

const animalConverter = {
	toFirestore: (animal) => {
		return {
			animal: animal.animal,
			nickname: animal.nickname,
			age: animal.age,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Animal(data.animal, data.nickname, data.age);
	}
};


function App() {
  const [currAnimals, setCurrAnimals] = useState({});
  const [newAnimal, setNewAnimal] = useState({
		animal: '',
		nickname: '',
		age: '',
	});

  const handleChange = (prop) => (event) => {
		setNewAnimal({ ...newAnimal, [prop]: event.target.value });
	};


  const fetchAnimals = async () => {
    const docRef = doc(db, "animals", "lion").withConverter(animalConverter);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    setCurrAnimals(docSnap.data());
  };

  function addToDb(values){
    const ref = doc(db, "animals", newAnimal.animal).withConverter(animalConverter);
    setDoc(ref, new Animal(newAnimal.animal, newAnimal.nickname, newAnimal.age));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>My Animal: {currAnimals.animal}</div>
        <div>My Nickname: {currAnimals.nickname}</div>
        <div>My Age: {currAnimals.age}</div>
        <button onClick={fetchAnimals}>Fetch Animals...</button>

        <input value={newAnimal.animal} onChange={handleChange('animal')} />
        <input value={newAnimal.nickname} onChange={handleChange('nickname')} />
        <input value={newAnimal.age} onChange={handleChange('age')} />
        <button onClick={addToDb}>Add to DB…</button>

      </header>
    </div>
  );
}

export default App;
