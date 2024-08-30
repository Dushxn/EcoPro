import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Admin/Admin.css";
import "../User.css";

const URL = "http://localhost:4000/inventory";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function DetailsDash() {
  const [inven, setInven] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setInven(data.inven));
  }, []);

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

  return (
    <div>
      <div>
        {noResults ? (
          <div>
            <br />
            <h1 className="con_topic">
              No <span className="clo_us"> Found</span>
            </h1>
          </div>
        ) : (
          <div className="item_grid">
            {inven.map((item, index) => (
              <div key={index} className="item_card_user">
                <p
                  className="itm_card_details"
                  style={{ fontSize: "25px", fontFamily: "Arial, sans-serif" }}
                >
                  <b></b> {item.amount}
                </p>
                <br />
                <div>
                  <img src={item.imgurl} alt="img" className="itm_img" />
                </div>

                <h3 className="name_itm_price" style={{ fontSize: "28px" }}>
                  {item.price}
                </h3>

                <h2 className="name_itm">{item.name}</h2>
                <p className="itm_card_details">
                  <b>Fertilizers</b> : {item.material}
                </p>
                <p className="itm_card_details">
                  <b>How work done</b> : {item.color}
                </p>

                <br />
                
                {/* Button added to the bottom of each form */}
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <button
                    onClick={() => alert(`Button clicked for ${item.name}`)}
                    style={{
                      padding: "8px 16px",
                      fontSize: "14px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    More Details

                  </button>
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsDash;