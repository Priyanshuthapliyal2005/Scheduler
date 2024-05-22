// app/_app.tsx

import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Make sure you have global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

