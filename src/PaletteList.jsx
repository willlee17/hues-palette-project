import React from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)", 
        gridGap: "5%",
    }
}

class PaletteList extends React.Component {
    goToPalette = (paletteId) => {
        //was able to this by passing in renderProps from the API outside. 
        this.props.history.push(`/palette/${paletteId}`)
    }

    render() {
        const { palettes, classes } = this.props; 
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Hue Palettes List</h1>
                    </nav>
                    
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            // instead of Link, using history. 
                            <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);