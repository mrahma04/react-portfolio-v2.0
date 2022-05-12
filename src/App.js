import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import { useState } from 'react';
// import './App.css';

function App() {

  // make pages 'reactive' using hooks
  let pages = [
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' }
  ]

  // currentPage will initialize to pages[0]
  // the value of currentPage will be set by calling the 'setCurrentPage'
  // function inside Header component
  // in the Header component, there's a onClick function which once 'clicked'
  // will set the 'setCurrentPage(page.name)'
  const [currentPage, setCurrentPage] = useState(pages[0])

  // conditionally render the middle section of the page
  // display Portfolio (and hide About) once Portfolio is 'clicked' etc.
  const renderPage = (currentPage) => {
    if (currentPage === 'Portfolio') {
      return <Portfolio></Portfolio>
    } else {
      return <About></About>
    }
  }

  return (
    <div className="App" style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}>
      </Header>
      {/* <About></About> */}
      {renderPage(currentPage)}
      <div style={{
        marginTop: "auto"
      }}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;