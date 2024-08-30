import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../Admin.css";

function Additem() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    material: "",
    color: "",
    amount: "",
    price: "",
    imgurl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Function to generate stock ID
  function generateStockId() {
    const prefix = "FF";
    const randomNumber = Math.floor(Math.random() * 100000);
    const paddedNumber = randomNumber.toString().padStart(5, "0");
    return `${prefix} ${paddedNumber}`;
  }

  // Function to generate supplier ID
  function generateSupplierId() {
    const prefix = "FS";
    const randomNumber = Math.floor(Math.random() * 100000);
    const paddedNumber = randomNumber.toString().padStart(5, "0");
    return `${prefix} ${paddedNumber}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await sendRequest();
    window.alert("added successfully!");
    navigate("/");
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:4000/inventory", {
      name: inputs.name,
      material: inputs.material,
      color: inputs.color,
      amount: inputs.amount,
      price: inputs.price,
      imgurl: inputs.imgurl,
    });
  };

  return (
    <div>
    <div className="children_div_admin">
      <h1 className="topic_inventory">
        Add Community Details <span className="sub_topic_inventory"> </span>{" "}
      </h1>

      
      <div className="item_full_box">
        <form className="item_form_admin" onSubmit={handleSubmit}>

        <label className="form_box_item_lable">User's Name</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            value={inputs.amount}
            onChange={handleChange}
            name="amount"
            required
          />
          <br></br>

          <label className="form_box_item_lable">Title</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            value={inputs.price}
            onChange={handleChange}
            name="price"
            required
          />

          <br></br>

          <label className="form_box_item_lable">Add Image</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            required
            value={inputs.imgurl}
            onChange={handleChange}
            name="imgurl"
          />
          <br></br>

          <label className="form_box_item_lable">Plant Description</label>
          <br></br>
          <input
            style={{ width: "95%", height: "80px", fontSize: "16px" }}
            className="form_box_item_input"
            type="text"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            required
          />
          <br></br>

          <label className="form_box_item_lable">Plant fertilizes</label>
          <br></br>
          <input
             style={{ width: "95%", height: "50px", fontSize: "16px" }}
            className="form_box_item_input"
            type="text"
            value={inputs.material}
            onChange={handleChange}
            name="material"
            required
          />
          <br></br>

         

         

          <label className="form_box_item_lable">How the work done</label>
          <br></br>
          <input
             style={{ width: "95%", height: "80px", fontSize: "16px" }}
            className="form_box_item_input"
            type="text"
            value={inputs.color}
            onChange={handleChange}
            name="color"
            required
          />
          <br></br>

          <button type="submit" className="admin_form_cneter_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Additem;
