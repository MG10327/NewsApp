import Navbar from "./components/Navbar"
import NewsBoard from "./components/newsboard"
import React, { useState } from "react";

export const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category}/>
    </div>
  )
}

export default App