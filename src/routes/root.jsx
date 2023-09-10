import { Outlet, Link, useLoaderData, } from "react-router-dom";
export default function Root() {
    return (
      <>
        <h1>Root</h1>
        <a href={`/`}>Index</a> &nbsp; <a href={`/contacts/2`}>contacts</a> &nbsp; <a href={`/counter`}>counter</a> &nbsp; <a href={`/ant`}>ant</a>
        <div>
            <Outlet />
        </div>
        
      </>
    );
  }