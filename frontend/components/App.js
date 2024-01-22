import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  let [people, setPeople] = useState([]);
  let [planets, setPlanets] = useState([]);
  

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.get(urlPeople)
      .then((res) => {
        return res.data
      })
      .then((people) => {
        setPeople(people)
      })
      .catch(() => {
        console.log("Error: Couldn't find people array endpoint")
      })
  }, [])
https://mail.google.com/mail/u/0/#inbox
  useEffect(() => {
    axios.get(urlPlanets)
      .then((res) => {
        return res.data
      })
      .then(planets => {
        setPlanets(planets)
      })
      .catch(() =>
        console.error("Error: Couldn't find Planet array endpoint")
      )
  }, []);

  // Assign planet names over planet Id's
  const homeworldMap = new Map(planets.map((planet) => [planet.id, planet.name]))
  for (let i = 0; i < people.length; i++) {
    const homeworldId = people[i].homeworld;

    if (homeworldMap.has(homeworldId)) {
      people[i].homeworld = homeworldMap.get(homeworldId);
    }
  }

  console.log(people)

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        people.map((person, key) => {
          return <Character name={person.name} homeworld={person.homeworld} key={key}/>
        })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
