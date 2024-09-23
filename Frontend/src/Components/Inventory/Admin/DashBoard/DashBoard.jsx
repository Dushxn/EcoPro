import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "../Admin.css";

const URL = "http://localhost:4000/inventory";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function DashBoard() {
  const [inven, setInven] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setInven(data.inven));
  }, []);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let sum = 0;
    inven.forEach((item) => {
      sum += parseInt(item.price);
    });
    setTotalAmount(sum);
  }, [inven]);

  const history = useNavigate();
  const deleteHandler = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Details?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${URL}/${_id}`);
        window.alert("details deleted successfully!");
        history("/inventory");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting details:", error);
      }
    }
  };

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: " Details Report",
    onafterprint: () => alert(" Details Report Successfully Download !"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filtered = data.inven.filter((inven) =>
        Object.values(inven).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setInven(filtered);
      setNoResults(filtered.length === 0);
    });
  };

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const getCurrentDate = () => {
      const dateObj = new Date();
      const month = dateObj.getMonth() + 1;
      const day = String(dateObj.getDate()).padStart(2, "0");
      const year = dateObj.getFullYear();
      const formattedDate = `${year}-${month}-${day}`;
      setCurrentDate(formattedDate);
    };

    getCurrentDate();
    const intervalId = setInterval(getCurrentDate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const availableItemCount = inven.length;

  return (
    <div>
      <div className="children_div_admin">
        <div className="dash_button_set">
          {/* Tailwind styled button */}
          
        </div>

        <div className="tbl_con_admin" ref={ComponentsRef}>
          <h1 className="topic_inventory">
            Community Details <span className="sub_topic_inventory"> </span>{" "}
          </h1>

          <div className="flex justify-end mb-4 ">
            <button
              className="bg-black font-bold py-2 px-4 rounded text-green-400"
              onClick={() => history("/additem")}
            >
              Add New Item
            </button>
          </div>

          <table className="table_details_admin mb-20">
            <thead>
              <tr className="admin_tbl_tr">
                <th className="admin_tbl_th">User's Name</th>
                <th className="admin_tbl_th">Plant title</th>
                <th className="admin_tbl_th">Image</th>
                <th className="admin_tbl_th">Plant Description</th>
                <th className="admin_tbl_th">Plant fertilizes</th>
                <th className="admin_tbl_th">How the work done</th>
                <th className="admin_tbl_th">Action</th>
              </tr>
            </thead>
            {noResults ? (
              <div>
                <br></br>
                <h1 className="con_topic">
                  No <span className="clo_us"> Found</span>{" "}
                </h1>
              </div>
            ) : (
              <tbody>
                {inven.map((item, index) => (
                  <tr className="admin_tbl_tr" key={index}>
                    <td className="admin_tbl_td">{item.amount}</td>
                    <td className="admin_tbl_td">{item.price}</td>
                    <td className="admin_tbl_td">
                      <img
                        src={item.imgurl}
                        alt="img"
                        className="img_admin_tbl"
                      />
                    </td>
                    <td className="admin_tbl_td">{item.name}</td>
                    <td className="admin_tbl_td">{item.material}</td>
                    <td className="admin_tbl_td">{item.color}</td>
                    <td className="admin_tbl_td">
                      <button
                        onClick={() => deleteHandler(item._id)}
                        className="btn_dash_admin_dlt mb-5"
                      >
                        Delete
                      </button>{" "}
                      <Link
                        to={`/updateitem/${item._id}`}
                        className="btn_dash_admin"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
