import Router from './utils/router.js'
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import React from "react";


function App() {
  return (
    <div className="App">
      <Router/>
        <ToastContainer position='top-right' autoClose={5000}
                        hideProgressBar={false}
                        newestOntop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
        />
    </div>
  );
}

export default App;
