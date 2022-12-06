import Head from 'next/head';

import 'styles/globals.css';
import { Nav, Alert } from 'components';
import { Link } from '../components/Link';
import Index from './users';
export default App;

function App({ Component, pageProps }) {
    return (
        <>
        <div className="app-container">
                <div className="student-detail-btn">
                    <Link href="/users" className="nav-item nav-link">Click and show Student Details</Link>
                </div>

            <nav className="navbar">
                <div className="navbar-nav">
                </div>
            </nav>
            
                <Alert />
                <div className="container pt-4 pb-4">
                    <Component {...pageProps} />
                </div>
               
            </div>

           
        </>
    );
}
