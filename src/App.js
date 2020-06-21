import React from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes'
import { getPalette } from './colorHelpers'

function App() {
  console.log('get the palette: ', getPalette(seedPalettes[4]))
  return (
    <div className="App">
      <Palette palette={getPalette(seedPalettes[4])}/>
    </div>
  );
}

export default App;
