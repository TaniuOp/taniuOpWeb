import MainContainer from './components/PortfolioSections/MainContainer';
import Footer from './components/PortfolioSections/Footer';
import { BrowserRouter } from 'react-router-dom';
import origamiBackground from './assets/wild_animals.jpg';
import './styles/styles.scss';

function App() {
  return (
    <>
      <div
        className='App'
        style={{
          backgroundImage: `url(${origamiBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <BrowserRouter>
          <MainContainer />
        </BrowserRouter>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
