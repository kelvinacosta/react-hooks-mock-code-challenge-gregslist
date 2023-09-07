import React,{useState} from "react";

function ListingCard({card,onDeleteButton}) {
  
  const {id,description,image,location } = card;
  
  const [isFavorite,setIsFavorite] = useState(false);
  

  const handleClickFavorite = ()=> {
    setIsFavorite(!isFavorite)
  }

  const handleDeleteButon = () => {
    // console.log("Hi I am deleting items!")
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => onDeleteButton(id))//onDeleteButton


  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
       
        <button onClick={handleClickFavorite} className={!isFavorite? "emoji-button favorite active":"emoji-button favorite"}>★</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteButon}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
