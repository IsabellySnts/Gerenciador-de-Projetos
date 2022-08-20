import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Project from './componentes/pages/Home';
import Container from './componentes/layout/Container';
import Nav from './componentes/layout/Navbar';
import Home from './componentes/pages/Home';
import Contato from './componentes/pages/Contato';
import NewProject from './componentes/pages/NewProject';



function App() {
  return (

    <Router>
      <Nav></Nav>
      <Container customClass="minHeight">
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/Project' element={<Project />}></Route>
          <Route path='/Contato' element={<Contato />}></Route>
          <Route path='/NewProject' element={<NewProject />}></Route>
          

        </Routes>
       
      </Container>
     
    </Router>
   


   
  );
}

export default App;
