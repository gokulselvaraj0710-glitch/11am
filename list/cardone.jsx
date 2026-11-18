
// const [apidata, setapidata]= usestate([])


// const handleapi=async()=>{
    
//     let a=await fetch("https://fakestoreapi.com/docs")
//     let b=await res.json()


//     setapidata(b)

// }

// return(
//     <div>
//         <button> onclick={handleapi}call api</button>
//         {apidata.map((obj)=>(
//             <div>
//                 <h1>(obj.title</h1>
//                 <h2>(obj.image</h2>
        

//         </div>
//         ))}
//     </div>
// )
// export default App;



import { useState } from "react";

function App() {
  const [apidata, setapidata] = useState([]);

  const handleapi = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let b = await res.json();

      setapidata(b);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleapi}>Call API</button>

      {apidata.map((obj) => (
        <div key={obj.id}>
          <h1>{obj.title}</h1>
          <img
            src={obj.image}
            alt={obj.title}
            
            width="150"
          />
          <h2>Price: ₹{obj.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;