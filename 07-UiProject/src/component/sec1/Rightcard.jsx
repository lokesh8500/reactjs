import React from 'react'
import Rightcardcontent from './Rightcardcontent'

function Rightcard(props) {
  return (
    <div className="relative h-full w-65 shrink-0 overflow-hidden rounded-4xl">
        <img className="h-full w-full object-cover" src={props.img} alt="Image" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/25 to-transparent"/>
        <Rightcardcontent intro={props.intro} tag={props.tag} id={props.id} />
    </div>
  )
}

export default Rightcard
