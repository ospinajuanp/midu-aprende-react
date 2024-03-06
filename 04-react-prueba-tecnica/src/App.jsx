import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hook/useCatImage'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const { imageURL } = useCatImage({ fact })
  useEffect(() => {
    handleClick()
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='ca' />}
    </main>
  )
}
