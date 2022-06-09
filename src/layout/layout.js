import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from '../components/about'
import Home from '../components/home'
import Contact from '../components/contact'
import Projects from '../components/projects'
import Nav from '../navigation/nav'


function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout