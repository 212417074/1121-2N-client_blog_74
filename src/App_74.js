import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage_74 from './pages/HomePage_74';
import BlogStaticPage_74 from './pages/BlogStaticPage_74';
import BlogNodeServer_74 from './pages/BlogNodeServer_74';
import BlogSupabase_74 from './pages/BlogSupabase_74';
import BlogLocalJson_74 from './pages/BlogLocalJson_74';

const App_74 = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_74 />} />
        <Route path='/static_74' element={<BlogStaticPage_74 />} />

        <Route path='/node_74' element={<BlogNodeServer_74 />} />
        <Route path='/supa_74' element={<BlogSupabase_74 />} />
        <Route path='/local_74' element={<BlogLocalJson_74 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_74;
