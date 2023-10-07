import React from 'react'
export default function Todo(props) {
  let {data, Add}= props;
  console.log("Re Render Error")
  return (
   
    <div>
        <h1>TODO App</h1>
     { data.map((data,index)=>{
        return <p>{data + index}</p>
    })}
      <div>
      <button className='rounded-xl shadow-xl border-2 border-white ml-3 mr-3 pl-5 pr-5' onClick={Add}>Add Value</button>
      </div>
    </div>
  )
}
