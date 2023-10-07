import { useCallback, useState } from 'react';
import './App.css';
import Todo from './Todo';
function App() {
  const[value, setvalue]= useState(1);
  const[data, setdata]=useState([ ]);
  const [object, setobject]= useState({name: 'shabbir', age: 20});
  const changeObject=()=>{
    setobject((prev)=>{return {...object, age: object.age + 1, name: "Anjum"}})
  }
  const changeValue=()=>{
    setvalue((prev)=> prev + 1)
  }
  const Add = useCallback(() => {
    setdata((prev) => {
      // You can use the latest value of 'data' here
      return [...prev, "New Data"];
    });
  }, [data]);
  
  return (
    <>
    <div className='text-center h-screen w-screen bg-black text-white'>

        <Todo Add= {Add} data={data}/>
        <div >
          {value}
          <button className='rounded-xl shadow-xl border-2 border-white m-3 pl-5 pr-5' onClick={changeValue}>+</button>
        </div>
      <div>
        {object.name} {object.age}
      </div>
      <div>
        <button onClick={changeObject}>Change Object Data</button>
      </div>
    </div>
    </>
  );
}

export default App;
