import React from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            snackbarOpen: false,
        }
    }

    handleFormatChange = (e) => {
        this.setState({
            format: e.target.value,
            snackbarOpen: true,
        })
        // making this take this.state.format is buggy because it's async. 
        // since i have the e anyways, just use e. 
        this.props.changeFormat(e.target.value)
    
    }

    closeSnackBar = () =>{
        this.setState({
            snackbarOpen: false
        })
    }

    render() {
        const { level, changeLevel, showLevel }= this.props;
        const { format, snackbarOpen } = this.state;
        return (
                <header className="navbar">
                    <div className="logo">
                        <Link to="/"> Hue Palettes </Link>
                    </div>

                    { !!showLevel && (
                        <div className="slider-container">
                            <span>Level: {level}</span>
                            <div className="slider">
                                <Slider 
                                    defaultValue={level} 
                                    min={100} 
                                    max={900}
                                    step={100}
                                    onAfterChange={changeLevel}
                                />
                            </div>
                        </div>
                    )}

                    
                    <div className="select-container">
                        <Select value={format} onChange={this.handleFormatChange}>
                            <MenuItem value="hex">Hex</MenuItem>
                            <MenuItem value="rgb">RGB</MenuItem>
                            <MenuItem value="rgba">RGBA</MenuItem>
                        </Select>
                    </div>
                    <Snackbar 
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
                        open={snackbarOpen} 
                        autoHideDuration={3000}
                        message={<span>Format changed to: {format}</span>}
                        onClose={this.closeSnackBar}
                        action={[
                            <IconButton onClick={this.closeSnackBar} color="inherit">
                                <CloseIcon />
                            </IconButton>
                        ]}
                    />
                </header>
        )
    }
}

export default Navbar;
