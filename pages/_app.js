import Head from 'next/head';

import 'styles/globals.css';
import { Nav, Alert } from 'components';
import { NavLink } from '../components/NavLink';
import Index from './users';
export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav">
                    <NavLink href="/users" className="nav-item nav-link">Users</NavLink>
                </div>
            </nav>
            <div className="app-container bg-light">
                <Alert />
                <div className="container pt-4 pb-4">
                    <Component {...pageProps} />
                </div>
               
            </div>

           
        </>
    );
}
