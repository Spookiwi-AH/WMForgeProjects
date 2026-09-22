
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import WeekOne from "./pages/WeekOne.jsx";
import Home from "./pages/Home.jsx";

function App() {

  

  return (
    <>  
      <Router>

        <Routes>

          <Route
            exact
            path="/"
            element={<Home />}
          
            /
          >

          <Route

            path ="/WeekOne"
            element ={<WeekOne />}

            /
          >  

          <Route
            path="*"
            element={<Navigate to="/" />}

            /
          >


        </Routes>

      </Router>
    </> 
  );   

}

export default App
