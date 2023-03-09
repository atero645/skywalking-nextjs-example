// import { useEffect } from 'react';
// import ClientMonitor from 'skywalking-client-js';

// const SkywalkingComponent = ( { Component, pageProps } ) => {
//     useEffect(() => {
//         console.log('loaded')

//         ClientMonitor.register({
//             collector: 'http://127.0.0.1:11800', 
//             service: 'test-ui',
//             pagePath: '/',
//             serviceVersion: 'v1.0.0',
//           });
//     })

//     return <Component {...pageProps} />
// }

// export default SkywalkingComponent
// import ClientMonitor from 'skywalking-client-js';

// const initSkywalking = () => {
//     ClientMonitor.register({
//                     collector: 'http://127.0.0.1:11800', 
//                     service: 'test-ui',
//                     pagePath: '/',
//                     serviceVersion: 'v1.0.0',
//                   });
//     return 'ClientMonitor loaded'
// }


async function initSkywalking() {
  await import('skywalking-client-js').then((module) => module.default.register({
    collector: 'http://127.0.0.1:11800', 
    service: 'test-ui',
    pagePath: '/',
    serviceVersion: 'v1.0.0',
  })).then( () => {console.log('Skywalking loaded!')})
}

export default initSkywalking


