









import React from "react";
import {ProductForm} from "./productForm"
import {ProductListing} from "./productListing";
import {v4 as uuid} from "uuid";
function App() {
  const [profile, setProfile] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [end, setEndPage] = React.useState();

  const fetchData = async () => {
    try {
       
      let d = await fetch (`http://localhost:3001/data?_page=${currentPage}&_limit=5`);
      let res = await d.json();
      setProfile(res);

      for(var i of d.headers.entries()){
        if(i[0] === 'x-total-count'){
          setEndPage(Math.ceil(i[1]/5))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (title,gender,price,category,image) => {
    const payLoad = {
      id : uuid(),
      title: title,
      gender: gender,
      price: price,
      category: category,
      image: image
    }
    try {

     await fetch(`http://localhost:3001/data`,
     {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {"Content-Type" : "application/json"}
     }
     );
      fetchData();
    } catch (error) {
      
    }
  }

  const handleDelete = async (id) => {
      try{
        await fetch(`http://localhost:3001/data/${id}`,{
          method: "DELETE"
        });
        fetchData();
      }
      catch(err){
        console.log(err)
      }
  }

  React.useEffect(()=>{
    fetchData();
  },[currentPage])

   return (
    <div className="App">
       <div><ProductForm handleUpdate={handleUpdate}/>
      <ProductListing profile={profile} handleDelete={handleDelete}/></div>
      <div>
        <button onClick={() => {setCurrentPage(currentPage-1)}} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => {setCurrentPage(currentPage+1)}} disabled={currentPage === end}>Next</button>

      </div>
      
    </div>
  );
}

export default App;
