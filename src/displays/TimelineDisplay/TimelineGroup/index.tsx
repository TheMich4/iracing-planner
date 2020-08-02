import React from 'react'

const TimelineGroup = ({ group }: any) => {
  console.log({ group })
  return (
    <div className="custom-group">
      <span className="title">{group.title}</span>
  </div>)
}

export default TimelineGroup