import React from 'react';
import './App.css';
import Filter from './Filter'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import DirectionsIcon from '@material-ui/icons/Directions';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

function App() {
  return (
    <div className="App">
      <Grid container spacing={8}>
          <Grid xs={12}>
              <Paper>
                  <h1>Dynamic Title</h1>
              </Paper>
          </Grid>
          <Grid xs={2}>
              <h3>Сервисы</h3>
              <Paper className="" elevation={1}>
                  <InputBase className="" placeholder="Название" />
                  <IconButton className="" aria-label="Name">
                      <SearchIcon />
                  </IconButton>
              </Paper>
          </Grid>
          <Grid xs={10}>
              <Paper className="" elevation={1}>
                RightFilter
              </Paper>
          </Grid>
          <Grid xs={12}>
              <Paper>
                  Content
              </Paper>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;

// Components
  // App
  // Filter - Фильтрация имеюшаю два вида
    // 1. Фильтрация по категориям промокода.
    // 2, Фильтрация по названию сервисов
    // - На главной странице, должно быть два фильтра стразу.
    // Фильтр должен быть один. Но масштабироваться под разные виды(Как снипет)
  // Service - Конкретный сервис который состоит из:
        // Titke
        // Desc
        // promocode
        //