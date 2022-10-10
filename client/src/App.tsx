import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from './app/store';
import ErrorRouter from './router/ErrorRouter';

function App() {
  const globalError = useAppSelector((state) => state.errorState.isErrorGlobal);
  return (
    <BrowserRouter basename="/">
      {globalError && (!globalError.statusCode || globalError?.statusCode >= 500) ? <ErrorRouter /> : <AppRouter />}
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
