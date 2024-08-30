import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import "../Admin.css";

function UpdateItem() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/inventory/${id}`
        );
        setInputs(response.data.inven);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:4000/inventory/${id}`, {
        name: String(inputs.name),
        material: String(inputs.material),
        color: String(inputs.color),
        amount: String(inputs.amount),
        price: String(inputs.price),
        imgurl: String(inputs.imgurl),
      })
      .then((res) => res.data);
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest().then(() => {
      window.alert("Update successfully!");
      history("/");
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateItem;