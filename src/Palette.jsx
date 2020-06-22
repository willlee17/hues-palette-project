import React from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
        }
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }

    changeFormat = (newFormat) => {
        this.setState({
            format: newFormat
        })
    }


    render() {
        const { colors, paletteName, emoji } = this.props.palette;
        const { level, format } = this.state;

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>

                <div className="Palette-colors">
                    { colors[level].map(color => (<ColorBox color={color[format]} name={color.name} key={color.id}/>)) }
                </div>

                <footer className="Palette-footer">
                    { paletteName }
                    <span className="emoji">{ emoji }</span>
                </footer>
            </div>
        )
    }
}

export default Palette; 