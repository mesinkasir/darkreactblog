import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">
      <img
        width="120"
        className="img-fluid"
        alt="pembuatan website dan applikasi"
        src="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
      />
      <h1 className="text-light">Dark React</h1>
    </Link>
    <p className="text-light">
      Free and open source code react app website themes template.
    </p>
  </div>
);

export default Nav;
