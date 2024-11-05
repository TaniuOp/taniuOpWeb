// import MainContainer from './components/PortfolioSections/MainContainer';
import Footer from './components/PortfolioSections/Footer';
import './styles/styles.scss';
import backgroundImg from './assets/abstract_compose.png';
import Landing from './components/Wip/Landing';

function App() {
  return (
    <>
      <div className='App'>
        <img
          src={backgroundImg}
          alt='taniu_background'
          className='img-abstract'
        />
        {/* <MainContainer /> */}
        <Landing />
      </div>
      <Footer />
    </>
  );
}

export default App;
