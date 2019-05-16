import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        textAlign: 'center',
        color: 'red'
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    paper: {
        marginTop: "20px"
    }
});

class Content extends Component {

    state = {
        // value: null,
        copied: false,
    };

    render() {
        const { classes, state } = this.props
        console.log("Default store = ", state)
        return (
            <div className="class-root">
                {
                    state.map((el, ndx) => {
                        return (
                            <Paper key={ ndx } className={classes.paper} elevation={1}>
                                <div className={ classes.content }>
                                    <div className="left-content">
                                        <div className="left__content-title">
                                            <a href={el.link}>
                                                <h2>{ el.title }</h2>
                                            </a>
                                        </div>
                                        <div className="left__content-desc">
                                            <Typography component="p">
                                                { el.description }
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        <div className="right__content-promocodes">
                                            <CopyToClipboard text={el.promocode}
                                                             onCopy={() => this.setState({copied: true})}>
                                                <button>Copy to clipboard</button>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }

            </div>

        )
    }
}


Content.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.array.isRequired
}

export default withStyles(styles)(Content);