import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../composants/Layout';
import Home from '../pages/Home';
import Erreur from '../pages/Erreur'
import Logement from '../pages/Logement';
import APropos from '../pages/APropos';

function RoutesPath() {
  return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logement/:id" element={<Logement/>}/>
                    <Route path="/a-propos" element={<APropos/>}/>
                    <Route path="*" element={<Erreur/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
  )
}

export default RoutesPath