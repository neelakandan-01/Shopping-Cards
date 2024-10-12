import React from 'react'

const LiftState1 = (props) => {
  return (
    <div>LiftState1
        <input type="text" value={props.text} onChange={(e)=>props.handleChange(e.target.value)}/>
    </div>
  )
}

export default LiftState1