import {useState} from 'react';
import './App.css';
import Text from './Text'

function App() {
  const[count,setUpdate]=useState(0);
  const[text,setText]=useState([]);

  const handleSubmit=(e)=>{
      e.preventDefault();
      let amount =parseInt(count);
      if(count <=0 ){
        amount =1
      }if(count >8 ){
        amount =8
      }
      console.log(amount)
    //  console.log(Text)
    setText(Text.slice(0,amount))
  }
  return (
    <div className="App">
     <h1>Paragraph generator</h1>
     <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraphs:</label>
     <input type="number" value={count} onChange={(e)=>setUpdate(e.target.value)}></input>
     <button>Generate</button>
     </form>
     <div>
       {text.map((item,index)=>{
         return <p key={index}>{item}</p>
       })}
     </div>
    </div>
  );
}

export default App;
