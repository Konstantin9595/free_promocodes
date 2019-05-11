import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TestData from './data'


class Search extends React.Component {

    constructor(props){
        super(props)
    }

    searchValue(userProps) {
        // console.log("This is userProps", userProps.target.value)
        const value = userProps.target.value

        const testData = new TestData().fetchData()
        console.log(testData)




        // https://www.site/db-request
        // const request = new requestData()

        // request->getData(value)
    }

    render() {
        return (
            <div className="search">
                <Paper className="" elevation={1}>
                    <InputBase className="" placeholder="Название" type="search" onChange={this.searchValue}/>
                    <IconButton className="" aria-label="Name" >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        )
    }

}

export default Search