import "./App.css";

function App() {
  return (

    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1>Nutrition Tracker</h1>
      <button style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        Create New Contact
      </button>
    </div>
  );
}

export default App;

