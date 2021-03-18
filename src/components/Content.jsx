import React from "react";
import Button from "./Button";
import screenshot from "../screenshot.png";
import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <div className="content">
        <div className="content-text">
          <p>BANK BETTER</p>
          <h2>Made for business current account</h2>
          <p>
            Powerful yet simple. Great human support. Open an account in{" "}
            <strong>10 minutes!</strong>
          </p>
          <Link to="/login">
            <Button btnStlye="btn" text="Login" />
          </Link>
          <div className="content-contact">
            <div className="content-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-module--homeHero_caption_helpLine_icon--4KmF0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>If you need any help, call +234-1-700-1760</span>
          </div>
        </div>
        <div>
          <img src={screenshot} alt="" className="image" />
        </div>
      </div>
    </>
  );
}

export default Content;
