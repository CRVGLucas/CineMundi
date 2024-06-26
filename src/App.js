import './App.css';
import './global.css'
import 'react-multi-carousel/lib/styles.css';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { MovieDetail } from './pages/movies/detail/MovieDetail';
import { Movies } from './pages/movies/Movies';

function App() {
  const router = createBrowserRouter([

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
