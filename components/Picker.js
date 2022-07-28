import data from '@emoji-mart/data';
import { useEffect, useRef } from 'react';

export default function Picker(props = {}) {
  const ref = useRef()

  useEffect(() => {
    import('emoji-mart').then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref })
    })
  }, [])

  return (
    <div ref={ref}></div>
  )
}