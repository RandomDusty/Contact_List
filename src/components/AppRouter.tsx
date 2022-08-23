import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import Authorization from "../pages/Authorization";
import Contacts from "../pages/Contacts";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {

    const {isAuth} = useTypeSelector(state => state.authorization)

    return (isAuth === 'true'
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )}
                <Route path='/*' element={<Navigate to="/contacts" replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )}
                <Route path='/*' element={<Navigate to="/" replace/>}/>
            </Routes>
    );
};

export default AppRouter;