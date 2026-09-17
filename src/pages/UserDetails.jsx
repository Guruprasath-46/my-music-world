import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    if (name && mobile) {
      localStorage.setItem("name", name);
      localStorage.setItem("mobile", mobile);

      navigate("/songs");
    } else {
      alert("Fill all details");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>User Details</h2>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default UserDetails;