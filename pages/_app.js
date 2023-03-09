import "@/styles/globals.css";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import initSkywalking from "../utils/skywalking"

// const SkywalkingComponent= dynamic(
//   () => import('./skywalking'),
//     { ssr: false }
//   )

export default function App({ Component, pageProps }) {

  useEffect(() => {
    //runs only once on production and twice on dev due to react strict mode
    initSkywalking()

    // async function importDynamicObject() {
    //   await import('./skywalking').then((module) => module.default())
    // }

    // importDynamicObject()

    // const dynamicObject = dynamic(
    //   () =>
    //     import("./skywalking").then((mod) => {
    //       console.log(mod)
    //       mod.initSkywalking();
    //     }),
    //   { ssr: false }
    // );
  }, []);

  // return <SkywalkingComponent Component={Component} pageProps={pageProps}/>

  return <Component {...pageProps} />;
}
