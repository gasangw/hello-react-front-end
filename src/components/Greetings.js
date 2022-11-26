import React from 'react'
import { useSelector } from 'react-redux'

export default function Greetings() {
    const message = useSelector((state)=> state.messages.greeting)
  return (
    <div className='greeting'>{message}</div>
  )
}
