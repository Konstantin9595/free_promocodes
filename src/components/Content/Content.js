import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import './Content.css'

const styles = theme => ({
    input: {
        textDecorationStyle: 'solid'
    },
});


class Content extends Component {

    state = {
        copied: false,
        copiedItem: null
    };

    onClick = (e) => {
        const attr = parseInt(e.target.getAttribute("ndx"))
        this.setState({copiedItem: attr})
    }

    onCopy = () => {
        this.setState({copied: true})
    }


    render() {
        const { state, classes:{ input } } = this.props
        const { copied, copiedItem } = this.state
        //const isClass = copied
        //console.log("copiedItem = ", copiedItem)

        const paper = state.map((el) => {
            const clazz = (copied && el.id === copiedItem ? "far fa-copy clipboard-color" : "far fa-copy")

            return (
                <Paper key={ el.id } className="paper" elevation={1}>
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
                                                 onCopy={this.onCopy}
                                                 className="clipboard">
                                    <FormControl className="clipboard-control">
                                        <InputLabel htmlFor="custom-css-standard-input">
                                            {el.promocode}
                                        </InputLabel>
                                        <FormHelperText>Промокод:</FormHelperText>
                                        <Input index={el.id} className="customize-input" disabled disableUnderline={true} />
                                        <i className={clazz} ndx={el.id} onClick={this.onClick}></i>
                                    </FormControl>
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
    state: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content);