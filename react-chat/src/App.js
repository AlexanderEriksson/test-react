import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import Form from './components/Form/Form';




const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  return (
        <div class='Container'>
              <Messages setCurrentId={setCurrentId} /> //Messages history

              <Form currentId={currentId} setCurrentId={setCurrentId} />  //Input box
        </div>

  );
};

export default App;