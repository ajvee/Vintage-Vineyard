import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav"

import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import New from "./Pages/New"
import Error from "./Pages/Error"

function App() {
  return (
    <div className="App">
     <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wines" element={<Index />} />
          <Route path="/wines/new" element={<New />} />
          <Route path="/wines/:id" element={<Show />} />
          <Route path="/wines/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;