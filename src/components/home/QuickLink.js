import React from "react";
import { Link } from "react-router-dom";

const Quicklink = props => {
  return (
    <div
      className="w-100 bg-white d-flex align-items-center justify-content-center"
      style={{ height: "200px" }}
    >
      <div
        className="bg-white shadow-sm w-75 h-75 rounded-3 d-flex flex-column 
        align-items-center justify-content-center "
        id={`quick${props.id}`}
      >
        {props.link ? (
          <Link to={`/${props.link}`} className="text-decoration-none">
            <p
              className="text-wrap text-white fw-bold fs-3 text-center"
              style={{
                marginBottom: "-5px",
                textShadow: "1px 1px 2px #000000",
                textDecoration: "none",
              }}
            >
              {props.title}
            </p>
            <p className="text-wrap text-white fw-bold fs-3 text-center">
              {props.subtitle}
            </p>
          </Link>
        ) : (
          <a
            href="https://drive.google.com/file/d/1XaW0jpOLP8m0-hhGfObpUugSovW6u18L/view?usp=sharing"
            className="text-decoration-none"
          >
            <p
              className="text-wrap text-white fw-bold fs-3 text-center"
              style={{
                marginBottom: "-5px",
                textShadow: "1px 1px 2px #000000",
                textDecoration: "none",
              }}
            >
              {props.title}
            </p>
            <p className="text-wrap text-white fw-bold fs-3 text-center">
              {props.subtitle}
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Quicklink;
