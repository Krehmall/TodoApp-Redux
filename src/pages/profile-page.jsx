import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { MdEmail } from "react-icons/md";
import { IoAccessibilitySharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  let username = "";
  let eMail = "";
  let isAdmin = "";
  const isUserLoggedIn = useSelector((state) => state.users.loggedInUser);
  const navigate = useNavigate();
  if (isUserLoggedIn) {
    username = isUserLoggedIn.username;
    eMail = isUserLoggedIn.eMail;
    isAdmin = isUserLoggedIn.isAdmin;
  }

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="app">
      <div className="form-container">
        <BackButton />
        <h2 className="heading">Profile</h2>
        <div className="data-line">
          <FaUser />
          <p>
            Username:<span className="value">{username}</span>
          </p>
        </div>
        <div className="data-line">
          <MdEmail />
          <p>
            Email: <span className="value">{eMail}</span>
          </p>
        </div>
        <div className="data-line">
          <IoAccessibilitySharp />
          <p>
            Account Status: <span className="value">{isAdmin ? "Admin" : "User"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
