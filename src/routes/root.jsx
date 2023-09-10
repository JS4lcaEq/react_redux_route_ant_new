import { Outlet, Link, useLoaderData, } from "react-router-dom";
export default function Root() {
    return (
      <>
        <h1>Root</h1>
        <a href={`/`}>Index</a> 
        || 
        <a href={`/contacts/2`}>contacts</a> 
        ||  
        <a href={`/counter`}>counter</a>
        ||
        <a href={`/ant`}>ant</a>
        <div>
            <Outlet />
        </div>
        
      </>
    );
  }