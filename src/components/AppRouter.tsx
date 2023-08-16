import React from 'react';
import {Route, Routes} from "react-router-dom";
import routers from "../router/Router.tsx";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {
                routers.map((rout, index) => {
                    return <Route
                        key={`rout ${index}`}
                        path={rout.path}
                        element={rout.element}
                    />
                })
            }
        </Routes>
    );
}

export default AppRouter;