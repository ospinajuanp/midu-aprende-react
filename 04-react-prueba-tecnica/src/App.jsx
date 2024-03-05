import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    handleClick()
  }, [])

  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ')[0].slice(0, 3).join(' ')
    const firstWord = fact.split(' ', 3).join(' ')

    setImageURL(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='Cat' />}
    </main>
  )
}
