import React from 'react';
import Home from './Home';
import ReactDom from 'react-dom';
import DetailPage from './DetailPage';
import Layout from '../display/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
