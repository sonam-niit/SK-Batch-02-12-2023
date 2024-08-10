import Counter from './components/Counter';
import { useContext } from 'react';
import { CounterContext } from './context/counterContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import ThemeComp from './components/ThemeComp';

function App() {
  const { count } = useContext(CounterContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h3>App Component {count}</h3>
      <Counter />
      <ThemeComp />
    </div>
  );
}

export default App;
