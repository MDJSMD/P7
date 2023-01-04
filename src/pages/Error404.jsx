import React from "react";
import Header from "../components/Banner";
import { Link } from "react-router-dom";
import Error404 from "../assets/error-404.png";

const Error = () => {
  return (
    <>
      <Header />
      <div className="error-404">
        <img src={Error404} alt="error-404" />
        <p className="ErrorPage">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="ErrorLink">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
};

export default Error;