import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types'

export default class Search extends React.Component {

    searchClick = (userProps) => {
        console.log("search click")
        // this.props.searchDataAction()

    }

    render() {

        return (
            <div className="search">
                <Paper className="" elevation={1}>
                    <InputBase className="" placeholder="Название" type="search" />
                    <IconButton className="" aria-label="Name" onClick={this.searchClick}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        )
    }

}

// Search.propTypes = {
//     searchDataAction: PropTypes.func.isRequired
// }