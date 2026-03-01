import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <div className={`max-w-298 mx-auto w-full`}>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <div className="bg-[#202430]">
                {/* <Footer></Footer> */}
            </div>
        </>
    );
};

export default Main;