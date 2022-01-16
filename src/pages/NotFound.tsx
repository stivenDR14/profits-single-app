import { Link } from "react-router-dom";
import { themes } from "../utils/data";

function NotFound() {
    return (
    <div data-theme={themes.Happy}>
       <Link to="/"><button className="btn btn-outline btn-secondary m-5">Back</button></Link>
      <br/>
      <label className="label">
        <span className="label-text"><h1>You shouldn't are here, back to the main page</h1></span>
      </label> 
      
     
  
    </div>);
  }
  
  export default NotFound;