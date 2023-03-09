import { useEffect } from 'react';
import ClientMonitor from 'skywalking-client-js';

const SkywalkingComponent = ( { Component, pageProps } ) => {
    useEffect(() => {
        console.log('loaded')

        ClientMonitor.register({
            collector: 'http://127.0.0.1:11800', 
            service: 'test-ui',
            pagePath: '/',
            serviceVersion: 'v1.0.0',
          });
    })

    return <Component {...pageProps} />
}

export default SkywalkingComponent