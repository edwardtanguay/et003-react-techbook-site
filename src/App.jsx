import './App.scss';
import techbooks from './data/techbooks.json';

console.log(techbooks);

function App() {
	return (
		<div className="App">
			<h1>{techbooks.length} Tech Books</h1>
			<div className="books">
				{techbooks.map((techbook) => {
					return (
						<div className="book">
							<div className="title">{techbook.title}</div>
							<div className="description">{techbook.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
