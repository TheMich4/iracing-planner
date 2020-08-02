import 'react-calendar-timeline/lib/Timeline.css'

import React from 'react'
import Timeline from 'react-calendar-timeline'
import TimelineGroup from './TimelineGroup'
import moment from 'moment'

const groups = [
  {
    id: 'IMSA',
    title: 'IMSA Sportscar Championship',
    stackItems: false,
    height: 50,
  },
  {
    id: 'vrsSprint',
    title: 'VRS GT Sprint Series',
    stackItems: false,
    height: 50,
  },
]

const items = [
  {
    id: 1,
    group: 'vrsSprint',
    title: 'Race',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
    canMove: false,
    canResize: false,
    canChangeGroup: false,
    itemProps: {
      onDoubleClick: (...args: any[]) => console.log('doubleClick', { args }),
      style: {
        background: 'red',
      },
    },
  },
]

const timeSteps = {
  second: 1,
  minute: 15,
  hour: 1,
  day: 1,
  month: 1,
  year: 1,
}

const TimelineDisplay = () => {
  return (<div>TIMELINE
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
      sidebarWidth={300}
      timeSteps={timeSteps}
      sidebarContent={(...args: any[]) => {
        console.log({ args })
        return null
      }}
      groupRenderer={TimelineGroup}
    />
  </div>)
}

export default TimelineDisplay