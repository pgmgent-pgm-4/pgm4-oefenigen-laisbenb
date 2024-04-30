import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { About, Contact, Home, Projects, Resume } from './pages';
import Root from './layouts/Root';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.about.path} element={<About />} />
    <Route path={ROUTES.projects.path} element={<Projects />} />
    <Route path={ROUTES.contact.path} element={<Contact />} />
    <Route path={ROUTES.resume.path} element={<Resume />} />
  </Route>
  
));

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
