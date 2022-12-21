import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import './style/index.scss';

import store from './redux/store';
import Board from './pages/Board';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/Nopage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"}>
                    <Route index element={<Dashboard />}/>
                    <Route path={"/board/:id"} element={<Board />}/>
                    <Route path={"/*"} element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);