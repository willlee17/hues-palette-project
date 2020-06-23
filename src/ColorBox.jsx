import React from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'

class ColorBox extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            overlayOpen: false, 
        }

    }

    overlayToggle = () => {
        this.setState({
            overlayOpen: true
        }, () => {
            setTimeout(() => this.setState({
                overlayOpen: false
            }), 1500)
        })
    }

    render() {
        const { color, name, colorId, paletteId, showMoreLink } = this.props;
        const { overlayOpen } = this.state;

        const isDark = chroma(color).luminance() <= 0.1

        return (
            <CopyToClipboard text={color} onCopy={this.overlayToggle}>
                 <div style={{background: color}} className="ColorBox">
                     {/* When user clicks on the block */}
                     <div 
                        style={{background: color}}
                        className={`copy-overlay ${overlayOpen && "show"}`} 
                    />
                    <div className={`copy-msg ${overlayOpen && "show"}`}>
                        <h1>COPIED!</h1>
                        <p>{color}</p>
                    </div>


                    <div className="copy-container">
                        <div className="box-content">
                            <span className={!!isDark && "light-text"}>{ name }</span>
                            <button className="copy-button">COPY!</button>
                        </div>
                        {
                            showMoreLink && (
                                <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                                    <span className="see-more">
                                            More
                                    </span>
                                </Link>
                            )
                        }
                       
                    </div>
                </div>
           </CopyToClipboard>
        )
    }
}

export default ColorBox; 