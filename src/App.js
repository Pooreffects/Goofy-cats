import { useEffect, useState } from 'react';

function App() {
  const [cat, setCat] = useState(null);

  const handleFetch = () => {
    fetch('https://api.thecatapi.com/v1/images/search') // open source cat API with randomize query
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCat(data);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h2>Melancholy search for another cat 😁</h2>
      </header>

      <div className="cat-container">
        {cat &&
          cat.map((kitty) => (
            <img src={kitty.url} key={kitty.id} alt="random-cat" />
          ))}
      </div>
      <button onClick={handleFetch} className="btn">
        Another one!
      </button>
    </div>
  );
}

export default App;
