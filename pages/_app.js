import '../styles/global.css'

// pages/_app.js
import React from 'react';
import App from 'next/app';
import MainLayout from '../compoenents/layout/main';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        );
    }
}

export default MyApp;