import React from 'react';
import '../App.css';
import Search from './Search'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import fetchData from '../reducers'
import { fetchAllServices } from "../actions/actions";

// import DirectionsIcon from '@material-ui/icons/Directions';


class App extends React.Component {

    constructor(props){
        super(props)
        this.services = props.content.data
    }

    render() {
        console.log("STORE = ", this.services)
        return (
            <div className="App">
                <Grid container spacing={8}>
                    <Grid xs={12}>
                        <Paper>
                            <h1>Dynamic Title</h1>
                        </Paper>
                    </Grid>
                    <Grid xs={2}>
                        <Search />
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
}

const mapStateToProps = (state) => {
    // console.log("state in mapStateToProps = ", state)
    return {
        content: fetchData(state, fetchAllServices())
    }
}

export default connect(mapStateToProps)(App);

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