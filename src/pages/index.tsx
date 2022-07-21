import React from "react";
import { Link } from "gatsby";

export default () => (
  <div>
    <ul>
      <li>
        <Link to="/submit">Submit talk</Link>
      </li>
      <li>
        <Link to="/review">Review talk</Link>
      </li>
    </ul>
  </div>
);
