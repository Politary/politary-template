import React from 'react';
import './App.css';
import {HomePage} from "./pages/HomePage/HomePage";
import {Layout} from "./modules/layout/components/Layout/Layout";
import { Routes, Route } from 'react-router-dom';

const routes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            path: '',
            // @ts-ignore
            element: <HomePage />,
        },
    ],
};


function App() {
  return (
      <>
          <Routes>
              <Route path={routes.path} element={routes.element}>
                  {routes.children.map(({ index, path, element }) => (
                      <Route
                          index={index}
                          path={path}
                          element={element}
                          key={path}
                      />
                  ))}
              </Route>
          </Routes>
      </>
  );
}

export default App;
