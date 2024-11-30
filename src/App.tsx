import Page from './app/page'
import './index.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const App: React.FC = () => {
  return (
      <Router>
          <React.Fragment>
            <Routes>
                <Route path="/" element={<Page/>}/>
            </Routes>
          </React.Fragment>
      </Router>
  )
}

export default App
