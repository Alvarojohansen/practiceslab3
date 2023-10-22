import React from 'react'

const ListTask = ({tasks}) => {
  return (
    <div>
      <div>{tasks.map((item,index)=>(
        <p key={index}> {item.task}</p>
      ))}</div>
    </div>
  )
}

export default ListTask