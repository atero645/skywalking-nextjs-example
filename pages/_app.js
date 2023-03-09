import '@/styles/globals.css'

import dynamic from 'next/dynamic'

const SkywalkingComponent= dynamic(
  () => import('./skywalking'),
    { ssr: false }
  )


export default function App({ Component, pageProps }) {

  return <SkywalkingComponent Component={Component} pageProps={pageProps}/>

  //return <Component {...pageProps} />
}
