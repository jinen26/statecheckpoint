import React from 'react'

const Modal = ({el,setshow}) => {
  return (
    <div className='bigmodal'>
<div className='littlemodal'>
      <button onClick={()=>setshow(false)}>X</button>
      <h1>Name: {el.name} </h1>
      <h1>Nationality:{el.nationality}</h1>
</div>
    </div>
  )
}

export default Modal
