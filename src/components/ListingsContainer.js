import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listing,onDeleteButton}) {
  
 

  const listOfListing = listing.map(card=><ListingCard key={card.id} card={card} onDeleteButton={onDeleteButton} />)
  


  return (
    <main>
      {/* <Search onSearchChange={handleSearchList}/> */}
      <ul className="cards">
        {listOfListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
