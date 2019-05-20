import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types'

export default class Search extends React.Component {

    searchChange = (userProps) => {
        const value = userProps.target.value
        this.props.searchDataAction(value)

    }

    render() {
        return (
            <div className="search">
                <Paper className="" elevation={1}>
                    <InputBase className="" placeholder="Название" type="search" onChange={ this.searchChange } />
                    <IconButton className="" aria-label="Name" >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        )
    }
}

Search.propTypes = {
    searchDataAction: PropTypes.func.isRequired
}

// Redux хранит в себе состояние всего приложения
// Что бы изменить это состояние приложения, у redux существуют reducers
// Которые меняют состояния и возвращают новое состояние
// Что бы редюсерам дать команду на изменения состояние, необходимо вызвать action
// В мамент вызова action reducer отловит этот вызов и произведет изменение состояния.