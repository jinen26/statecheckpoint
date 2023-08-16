import React, { useState } from 'react'
import Playerlist from './Playerlist'
import Modal from './Modal'

const Playercard = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='playercard'>
        {show?<Modal setshow={setshow}
         el={el} />:null}
      <img onClick={()=>setshow(true)} src={el.image} />
    </div>
  )
}

export default Playercard
