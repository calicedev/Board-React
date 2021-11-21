import {format} from 'date-fns';
import React, {useContext, useMemo, useState} from 'react';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import { Fragment } from 'react';


function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );

  
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  const styles = StyleSheet.create({
    block: {
      flex: 1,
    },
  });
  return (
    <Fragment>
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}/> 
      }/>
      
    <FloatingWriteButton hidden={hidden} />
    
    </Fragment>
  );
  
}

export default CalendarScreen;
