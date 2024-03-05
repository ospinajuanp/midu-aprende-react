import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ')[0].slice(0, 3).join(' ')
    const firstWord = fact.split(' ', 3).join(' ')

    setImageURL(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
  }, [fact])

  return (
    <main>
      <h1>Hello World!</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='Cat' />}
    </main>
  )
}
