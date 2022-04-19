import './App.css';
import { useState } from 'react';
import colorData from './component/color/color_data.json'
import  ColorList  from './component/color/ColorList'
// import StarRate from './component/starRating/StarRate'

function App() {
  const [colors, setColors] = useState(colorData)
  const onRate = (id) => {
    const newColors = colors.map(color => color.id===id?{...color, rating:(color.rating+1)}: color)
    setColors(newColors)
  }

  const onremove = (id) => {
    const newColors = colors.filter(color=> color.id!==id)
    setColors(newColors)
  }

  const reset = () => {
    setColors(colorData)
  }

  return (
    <div className="App">
        <button onClick={reset} disabled={colors===colorData}>Reset</button>
        <ColorList colors ={colors} onRate={onRate} onremove={onremove} />
    </div>
  );
}

// function App() {
//   const total = 5;
//   const [selected, setSelected] = useState(0)
//   const onSelect = () => {
//     (selected < total) ? setSelected(selected + 1) : console.log('limited length!')
//   }

//   return (
//     <div className="App">
//         <StarRate totalStars={total} selected={selected} onSelect={onSelect} style={{backgroundColor:'lightblue'}} />
//         <p>{selected} of {total} Stars</p>
//     </div>
//   );
// }

export default App;
