import Header from "./Header";
import Footer from "./Footer";

let Layout = (props) => {
    return (
        <>
        <Header/>
        { props.children }
        <Footer/>
        </>
    )
}

export default Layout;