import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import GlobalStyle from './styles';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import DefaultRoutes from './routes';
// Para adicionar o CSS da biblioteca RSuite
import 'rsuite/dist/rsuite.min.css';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter> 
                    <Header/>
                    <SideBar/>
                    <DefaultRoutes/>
                    <Footer/>
                    <GlobalStyle/>
                    <ToastContainer autoClose={3000} className="toast-container"/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
