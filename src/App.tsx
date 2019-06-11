import React from 'react';
import EventList from './components/EventList';
import ListComponent from './components/ListComponent';
import * as styles from './App.css';

const App: React.FC = () => {

  return (
    <ListComponent className={styles.list}/>
  );
}

export default App;
