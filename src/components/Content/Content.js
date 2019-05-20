import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Content.css'

export default class Content extends Component {

    state = {
        copied: false,
    };

    render() {
        const { state } = this.props

        const paper = state.map((el, ndx) => {
            return (
                <Paper key={ ndx } className="paper" elevation={1}>
                    <div className="content-container">
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

        return (
            <div className="root">
                {paper}
            </div>

        )
    }
}


Content.propTypes = {
    state: PropTypes.array.isRequired
}