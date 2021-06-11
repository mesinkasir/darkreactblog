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
    <hr />
    <p className="text-light">
      Free and open source code react app website themes template.
    </p>
    <a
      href="tel:+6285331361404"
      className="btn btn-primary rounded-pill btn-block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-headset"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
      </svg>{' '}
      Call us
    </a>
    <a
      href="https://wa.me/6285646104747"
      className="btn btn-success rounded-pill btn-block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chat"
        viewBox="0 0 16 16"
      >
        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
      </svg>{' '}
      Whatsapp
    </a>
    <hr />
    <a
      href="https://github.com/mesinkasir/darkreactblog"
      className="btn btn-outline-light rounded-pill col-12"
      target="_blank"
    >
      Github
    </a>
  </div>
);

export default Nav;
