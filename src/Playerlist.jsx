import React from 'react'
import Playercard from './Playercard'

const Playerlist = ({players}) => {
  return (
    <div className='playerlist'>  
      {players.map(el=><Playercard el={el}/>)}
    </div>
  )
}

export default Playerlist
