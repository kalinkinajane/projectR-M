import './Main.css'
import { InputLabel, Select, MenuItem } from '@material-ui/core';
function Main(props) {
  console.log(props.data)
    return (
      <main className="main">
<InputLabel classes={{ label: 'my-class-name' }} id="label">Age</InputLabel>
<Select classes={{ label: 'my-class-name' }} labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
<div className="item__list">
  {props.data.map((item, index) =>(
  <div className="item" key={index}>
    <img className="item__img" src={item.image} alt={item.name}/>
    <p className="item__name">{item.name}</p>
  </div>
  ))}
  </div>
      </main>
    );
  }
  
  export default Main;