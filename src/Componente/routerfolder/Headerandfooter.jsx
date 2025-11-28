import { Outlet } from "react-router-dom";
import Header from "../hederfooter/Header";
import Footer from "../hederfooter/Footer";



export default function HeaderandFooter()
{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}