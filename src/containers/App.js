import React from 'react';
import './App.css';
import Search from '../components/Search'
import Content from '../components/Content'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { searchDataAction } from '../actions/searchDataAction'

class App extends React.Component {
    render() {

        const { state, searchDataAction } = this.props

        return (
            <div className="container">
                <Grid container spacing={8}>
                    <Grid xs={12} className="grid-promocodes">
                        <Paper>
                            <h1>Бесплатные промокоды</h1>
                        </Paper>
                    </Grid>
                    <Grid xs={12} className="grid-search">
                        <Search searchDataAction={searchDataAction} />
                    </Grid>
                    <Grid xs={12} className="grid-content">
                        <Paper className="grid__content-paper">
                            <Content state={state}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.store.bonuses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchDataAction: (name) => dispatch(searchDataAction(name))
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);