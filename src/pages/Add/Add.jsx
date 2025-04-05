import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
    
    const url = "http://localhost:4000" ;
    const [image,setImage] = useState(false) ;
    const [data,setData] = useState({

         name : "",
         description : "",
         price : "",
         category : ""
    })

    const onChangeHandler = (e) => {
        
        const name = e.target.name ;
        const value = e.target.value ;

        setData(data=> ({...data,[name]:value})) ;

    }

    useEffect(()=>{
      
      
     
    },[data])
  
    const onSubmitHandler = async (e) => {
        
        e.preventDefault() ;

        const formData = new FormData() ;

        formData.append("name",data.name) ;
        formData.append("description",data.description) ;
        formData.append("price",data.price) ;
        formData.append("category",data.category) ;
        formData.append("image",image) ;

        const response = await axios.post(`${url}/api/food/add`,formData) ;

        if(response.data.success){

             setData({

                 name: "",
                 description : "",
                 price : "",
                 category : "Salad"
             })

             setImage(false)
             toast.success(response.data.message)
        }
          
        else{

             toast.error(response.data.message)
        }
    }

  return (
    <div className="add">
       
       <form className="flex-col" onSubmit={onSubmitHandler}>

       <div className="add-img-upload flex-col">
        <p> Upload Image </p>
        <label htmlFor="image">
          <img src={image ? URL.createObjectURL(image):assets.upload_area} alt="" />
        </label>

        <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="image" hidden required />
      </div>

      <div className="add-product-name flex-col">
        <p> Product name </p>
        <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="type your name" />
      </div>

      <div className="add-product-description flex-col">
        <p> Product Description </p>
        <textarea name="description" onChange={onChangeHandler} value={data.description} rows='6' placeholder="write content here" required />
      </div>

      <div className="add-category-price">

         <div className="add-category flex-col"> 

            <p> Product Category </p>

            <select onChange={onChangeHandler}  name="category">

                <option value="Salad"> Salad </option>
                <option value="Rolls"> Rolls </option>
                <option value="Deserts"> Deserts </option>
                <option value="Sandwich"> Sandwich </option>
                <option value="Cake"> Cake </option>
                <option value="Pure Veg"> Pure Veg </option>
                <option value="Pasta"> Pasta </option>
                <option value="Noodles"> Noodles </option>

            </select>

         </div>

         <div className="add-price flex-col">
             
             <p> Product Price </p>
             <input type="Number" name="price" onChange={onChangeHandler} value={data.price} placeholder="$20"/>
         </div>
       
      </div>

      <button type="submit" className="add-btn"> Add </button>

       </form>

    </div>
  );
};

export default Add;
