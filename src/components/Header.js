import React,{useState} from "react";
import Search from "./Search";

function Header({onSearchChange}) {
  
  const [searchTexByName,setSearchTextByName]=useState("")
  
  const handleSeacrhName = (someTextControlled)=>{
    setSearchTextByName (someTextControlled)
    onSearchChange(searchTexByName)
  }
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={handleSeacrhName}/>
    </header>
  );
}

export default Header;
