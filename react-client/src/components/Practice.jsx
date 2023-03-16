import React,{useState} from 'react';
import axios from 'axios';


const Practice = ({data}) => {
  const [count,setCount]=useState(0)
  const [showText, setShowText] = useState(false);

const nextPhrase= async(e)=>{
if (count <data.length-1){
  setCount(count+1)
  setShowText(false)
} else {setCount(0)};
await axios.patch(`http://localhost:3000/api/phrases/${data[count]._id}`,{     
   status: e.target.textContent})
}

  return (
  <div>
    <h1>Practice</h1>
    {    console.log(data)
    }
    <div className="card">
      <div className="card-kor">{data[count].kor}</div>
      <div className="card-rom">{data[count].rom}</div>
      {showText && <div className="card-eng">{data[count].eng}</div>}
      <button onClick={() => setShowText(!showText)}>{(showText===true)?"Hide Translation":"Reveal Translation"}</button>
      <button onClick={nextPhrase} >Not yet</button>
      <button onClick={nextPhrase}>Almost</button>
      <button onClick={nextPhrase}>Got it</button>
    </div>
  </div>
)
}
export default Practice;
