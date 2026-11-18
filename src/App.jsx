import React, { useMemo } from "react"
import App from "./checkcamp";
import "bootstrap/dist/css/bootstrap.min.css"
import grocerylist from "./grocerylist";


function App(){

  const handlelogout = useMemo (() => {
    return 12

  },[])
  
  return (
    <div>
      <grocerylist/>
    </div>
  )
}

export default App;