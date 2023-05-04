import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
function App() {
  return (
    <Fragment>
      <div className='bg-gray-100 min-h-screen ' >
        <Navbar />
        <Main/>
      </div>
    </Fragment>
  );
}

export default App;
