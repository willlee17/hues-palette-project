import React from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }; 
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }


    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;

        console.log('colors!: ', colors)

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel}/>

                <div className="Palette-colors">
                    { colors[level].map(color => (<ColorBox hex={color.hex} name={color.name}/>)) }
                </div>

                {/* footer */}
            </div>
        )
    }
}

export default Palette; 