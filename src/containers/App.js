import React from 'react';
import '../App.css';
import Search from '../components/Search'
import Content from '../components/Content'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'


class App extends React.Component {
    render() {

        const { state } = this.props

        return (
            <div className="App">
                <Grid container spacing={8}>
                    <Grid xs={12}>
                        <Paper>
                            <h1>Бесплатные промокоды</h1>
                        </Paper>
                    </Grid>
                    <Grid xs={2}>
                        <Search />
                    </Grid>
                    <Grid xs={12}>
                        <Paper>
                            <div className="container">
                                <Content state={state}/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

// state - в данном случае это store редьюсера. Или редьюсеров(в случае если их несколько и они скомбинированны)
const mapStateToProps = (state) => {
    return {
        state: state.store
        // content: state.data, //return fetchDataReducer combine
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         searchDataAction: (name) => dispatch(searchDataAction(name))
//     }
// }



export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(App);