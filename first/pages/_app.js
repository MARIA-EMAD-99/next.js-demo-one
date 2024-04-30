import "...@component/styles/globals.css";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import ('bootstrap/dist/js/bootstrap.min.js')
  },[])

  if(Component.getLayout)
  return  Component.getLayout(<Component {...pageProps} />)
  return<>
  <Navbar></Navbar>
 <Component {...pageProps} />;
 </>
}
