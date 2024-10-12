import React from 'react'

const FBCPropsEx = (props) => {
    let {username,arr,obj}=props;
  return (
    
    <div>FBCPropsEx

        {/* <h1>{props.username}</h1>
        <h2>{props.age}</h2> */}

            <h1>{username}</h1>
            <h1>{arr.map((val)=>{
                return <ol><li>{val}</li></ol>
            })}</h1>
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>

    </div>
  )
}

export default FBCPropsEx