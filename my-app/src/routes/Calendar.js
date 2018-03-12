import React from 'react';
import BigCalendar from 'react-big-calendar'
import events from '../ui/calendar/events'
import 'react-big-calendar/lib/css/react-big-calendar.css'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
class Calendar extends React.Component {
    render() {
        return(
           <div className="section-calendar" style={{height: '100%'}}>
               <BigCalendar
                   events={events}
                   views={allViews}
                   step={60}
                   showMultiDayTimes
                   defaultDate={new Date(2018, 2, 1)}
               />
           </div>
        )
    }
}
export default Calendar