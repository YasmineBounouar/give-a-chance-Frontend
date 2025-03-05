import React from 'react'

function FaqElement(props) {


  function handleOpen(position){
      setOpen(position)
      console.log('Clicked position:', position);
  }


  return (
    <div>
        <h4> {props.question} <span onClick={()=>{handleOpen(props.position)}}>X</span> </h4>
        {open === props.position ? <p> {props.reponse}</p> : null}
    </div>
  )
}

export default FaqElement