import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((pRoute, index) => {
                        let Layout = DefaultLayout;

                        if (pRoute.layout) {
                            Layout = pRoute.layout;
                        } else if (pRoute.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = pRoute.component;
                        return (
                            <Route
                                key={index}
                                path={pRoute.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
