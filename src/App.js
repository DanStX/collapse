
import Collapse from './components/Collapse';
import './scss/file_manifest.scss';

function App() {
  return (
    <div className="App">
      <div className='collapses' >

          <Collapse title="Titre 1" content="Contenu 1" />
          <Collapse title="Titre 2" content="Contenu 2" />
          <Collapse title="Titre 3" content="Contenu 3" />
          <Collapse title="Titre 4" content="Contenu 4" />
      </div>
      
    </div>
  );
}

export default App;
