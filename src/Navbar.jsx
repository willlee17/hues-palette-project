import React from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <header className="navbar">
                    <div className="logo">
                        <a href="#">Hue Palettes</a>
                    </div>

                    <div className="slider-container">
                        <span>Level: {this.props.level}</span>
                        <div className="slider">
                            <Slider 
                                defaultValue={this.props.level} 
                                min={100} 
                                max={900}
                                step={100}
                                onAfterChange={this.props.changeLevel}
                            />
                        </div>
                    </div>
                </header>
        )
    }
}

export default Navbar;
