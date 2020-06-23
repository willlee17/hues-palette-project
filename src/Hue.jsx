import React from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

class Hue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
        }

        this._hues = this.getHues(this.props.palette, this.props.colorId)
        console.log('the props: ', this.props)
    }

    getHues = (palette, colorId) => {
        let hues = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            let hue = allColors[key].find(level => level.id == colorId);
            hues.push(hue);
        }

        return hues.slice(1);
    }

    changeFormat = (newFormat) => {
        this.setState({
            format: newFormat
        })
    }

    render() {
        const { palette, colorId } = this.props;
        const { level, format } = this.state;

        const hueBoxes = this._hues.map(hue => (
            <ColorBox
                key={hue.id}
                name={hue.name}
                color={hue[format]}
                colorId={colorId}
                paletteId={palette.id}
                showMoreLink={false}
            />
        ))
        return (
            <div className="SingleHue Palette">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showLevel={false}/>
                <h1>Single Color Hues Palette</h1>
                <div className="Palette-colors">
                    { hueBoxes }
                    <div className="go-back ColorBox">
                        <Link to={`/palette/${palette.id}`}>
                            <button className="back-button">Go back</button>
                        </Link>
                    </div>
                </div>

                <footer className="Palette-footer">
                    { palette.paletteName }
                    <span className="emoji">{ palette.emoji }</span>
                </footer>
            </div>
        )
    }
}

export default Hue; 