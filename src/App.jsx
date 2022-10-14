import './App.scss';
import techbooks from './data/techbooks.json';

console.log(techbooks)

function App() {
	return (
		<div className="App">
      <h1>{techbooks.length} Tech Books</h1>
      {techbooks.map(techbook => {
        return (
          <div>{techbook.title}</div>
        )
      })}
		</div>
	);
}

export default App;
