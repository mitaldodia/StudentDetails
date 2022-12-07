import Head from 'next/head';

import 'styles/globals.css';
import { Nav, Alert } from 'components';
import { Link } from '../components/Link';
import Index from './users';
export default App;
import { FaUserCircle } from "react-icons/fa";

function App({ Component, pageProps }) {
    return (
        <>
        <div className="header-details">
            <div className="scholl-detail">
                <h2>Student Informations</h2>
            </div>
            <div className="porfile-detail">
                <FaUserCircle/>
            </div>
        </div>
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
