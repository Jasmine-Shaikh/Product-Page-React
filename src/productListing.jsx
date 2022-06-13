





import React from "react";


 
function ProductListing({profile,handleDelete}){

    return(
      
        profile.map((e) => {

         return(
            <div className="productCard">

                <h3>{e.title}</h3>
                <h4>Category: {e.category}</h4>
                <img src={e.image} alt={e.title}>
                </img>
                <h4>Price: {e.price} Rs</h4>
                <h4>Gender: {e.gender}</h4>
                <button onClick={handleDelete(e.id)}>Delete</button>
            </div>
         )

        })

    )

}

export {ProductListing}