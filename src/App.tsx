import React, { useEffect, useState } from 'react';
import Joke from './Joke'
import './App.css';

const BASEJOKES = '//api.icndb.com/jokes'

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    const getJokes = async () => {
      const res = await fetch(`${BASEJOKES}?escape=javascript`)
      const json = await res.json()
      setResults(json.value)
    }

    getJokes()
  }, [])

  return (
    <div className="App">
      {results.map(result => (
        <Joke {...result} />
      ))}
    </div>
  );
}

export default App;
