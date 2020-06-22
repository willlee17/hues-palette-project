import React from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes'
import { getPalette } from './colorHelpers'
import { Switch, Route, Link} from 'react-router-dom';
import PaletteList from './PaletteList'

function App() {
  console.log('get the palette: ', getPalette(seedPalettes[4]))

  let findPalette = (id) => {
    return seedPalettes.find(palette => palette.id == id)
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedPalettes}/>}/>
      <Route 
        exact 
        path="/palette/:id" 
        render={routeProps => (
          <Palette palette={getPalette(
            findPalette(routeProps.match.params.id)
            )} 
          />
        )}
      />
    </Switch>
    
    // <div className="App">
    //   <Palette palette={getPalette(seedPalettes[2])}/>
    // </div>
  );
}

export default App;
