import { Outlet, Link, useLoaderData, } from "react-router-dom";
export default function Root() {
    return (
      <>
        <h1>Root</h1>
        <ul className="nav-container">
          <li><Link to={`/`}>Index</Link></li>
          <li><Link to={`/contacts/2`}>contacts</Link></li>
          <li><Link to={`/counter`}>counter</Link></li>
          <li><Link to={`/ant`}>ant</Link></li>
        </ul>
        
        <div>
            <Outlet />
        </div>
        
      </>
    );
  }