import React,{useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [listing,setListing] = useState([])
  // const [filteredListing, setFilteredListing] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(response=>response.json())
    .then((data)=>{
      setListing(data)
      // setFilteredListing(data)
  })
    .catch(error=>console.error("Eror Getting Listing",error))

  },[])

  function handleDeleteButon(itemToDelete){
    const deleteItem = listing.filter(item=> item.id !== itemToDelete)
    // console.log("I have been calling from main delete button")
    setListing(deleteItem)
    // setFilteredListing(deleteItem)
  }

  // const handleSearch = (searchText) => {
  //   console.log("Search Text in search in App: ", searchText)
  //   if (searchText === "") {
  //     // If the search query is empty, show all listings
  //     setFilteredListing(listing);
  //   } else {
  //     const searchResults = listing.filter((item) =>
  //       item.description.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     setFilteredListing(searchResults);
  //   }
  // };
  function handleSearchInAPP(sometext){
    
    if(sometext === ""){
      setListing(listing)
    }else{
    
    const searchItem = listing.filter((item)=>item.description.toLowerCase().includes(sometext.toLowerCase()))
    setListing(searchItem)
  }
    // const searchItem = listing.filter((item)=>console.log(item.description))
    
  
  }

  return (
    <div className="app">
      <Header onSearchChange={handleSearchInAPP}/>
      <ListingsContainer listing={listing} onDeleteButton={handleDeleteButon}/>
    </div>
  );
}

export default App;

// As a user:

// When the app starts, I can see all listings.
// I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
// I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
// I can search for listings by their name.
