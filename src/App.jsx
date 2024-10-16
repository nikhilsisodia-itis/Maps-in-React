import './App.css'

function App() {
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <>
      <h1>Alphabets:</h1>
      <ol className="list-group">
        {alphabet.map((letter, index) => (
          <li className="list-group-item" key={index}>{letter}</li>
        ))}
      </ol>
    </>
  )
}

export default App
