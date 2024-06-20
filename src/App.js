import './App.css';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { MovieDetail } from './pages/movies/detail/MovieDetail';
import { Movies } from './pages/movies/Movies';
import './global.css'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/movies',
      element: <Movies />,
    },
    {
      path: '/movies/:id',
      element: <MovieDetail />
    }
  ])

  return (
    <div className="App">
      <Header/>
        <main className="mainWrapper">
          <RouterProvider router={router}/>
        </main>
    </div>
  );
}
export default App;
