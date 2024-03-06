import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ')[0].slice(0, 3).join(' ')
    const firstWord = fact.split(' ', 3).join(' ')

    setImageURL(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
  }, [fact])

  return { imageURL }
}
