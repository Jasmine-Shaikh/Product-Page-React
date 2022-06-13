





import React from "react"

// const iState = {
    
//     id: "",
//     title : "",
//     gender: "",
//     price: "",
//     category: "",
//     image: ""
// }
function ProductForm({handleUpdate}){
  
    // const [formData, setData] = React.useState("");
    // const handleUpdate = (e) =>{
    //     let {name,value} = e.target;
    //     setData((newData) => ({...newData,name,value}))
    // }
    // const submitData = (e) =>{
        
        
    // }

    // const {title,gender,price,category,image} = formData;

     const [title, setTitle] = React.useState("");
     const [gender, setGender] = React.useState("");
     const [price, setPrice] = React.useState("");
     const [category, setCategory] = React.useState("");
     const [image, setImage] = React.useState("");


    return (
    
     <div>
        <h2>Fill the form below to add product</h2>
        <form onSubmit={handleUpdate(title,gender,price,category,image)}>  
            <label>
                Title:
                <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </label>
            <br/>
            <label>
                Gender:
               <select name="gender" value={gender}  onChange={(e)=>{setGender(e.target.value)}}>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
               </select>
            </label> 
            <br/>
            <label>
                Price:
                <input type="number" name="price" value={price}  onChange={(e)=>{setPrice(e.target.value)}}/>
            </label> 
            <br/>
            <label>
                Category:
                <input type="text" name="category" value={category}  onChange={(e)=>{setCategory(e.target.value)}}/>
            </label> 
            <br/>
            <label>
                Image:
                <input type="url" name="image" value={image}  onChange={(e)=>{setImage(e.target.value)}}/>
            </label>
            <br/>
            <input type="submit"/>
        </form>
     </div>
    )
}

export {ProductForm}