import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster
        containerStyle={{
          top: 50,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </BrowserRouter>
  );
}

export default App;
