import React from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'


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
        const { hex, name } = this.props;
        const { overlayOpen } = this.state;

        return (
            <CopyToClipboard text={hex} onCopy={this.overlayToggle}>
                 <div style={{background: hex}} className="ColorBox">
                     {/* When user clicks on the block */}
                     <div 
                        style={{background: hex}}
                        className={`copy-overlay ${overlayOpen && "show"}`} 
                    />
                    <div className={`copy-msg ${overlayOpen && "show"}`}>
                        <h1>COPIED!</h1>
                        <p>{hex}</p>
                    </div>


                    <div className="copy-container">
                        <div className="box-content">
                            <span>{ name }</span>
                        </div>
                        <button className="copy-button">COPY!</button>
                        <span className="see-more">More</span>
                    </div>
                </div>
           </CopyToClipboard>
        )
    }
}

export default ColorBox; 