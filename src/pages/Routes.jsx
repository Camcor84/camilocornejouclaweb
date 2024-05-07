import { Routes, Route, HashRouter } from "react-router-dom";

// global Styles
import "@/Common/css/normalize.css";
import "@/Common/css/global.scss";

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";

import { MediaQueryProvider } from "@/Common/useMediaQuery.jsx";

// page components
import Home from "./Home";
import Staff from "./Staff/staff.jsx";
import Contact from "./Contact";

// course work page components
import CourseWorkLayout from "./courseworks/CourseWorkLayout.jsx/";
import SunAndMoon from "./courseworks/SunAndMoon/SunAndMoon.jsx";
import Essays from "./courseworks/Essays/Essays.jsx";
import ResponsiveDesign from "./courseworks/ResponsiveDesign.jsx";

const MyRoutes = () => {
    return (
        <HashRouter>
            <MediaQueryProvider>
                <Routes>
                    <Route element={<PagesLayout />}>
                        <Route element={<Home />} path="" />
                        <Route element={<Staff />} path="staff" />
                        <Route element={<Contact />} path="Contact" />

                        <Route
                            element={<CourseWorkLayout />}
                            path="course-work"
                        >
                            <Route element={<Essays />} path="" />
                            <Route
                                element={<SunAndMoon />}
                                path="sun-and-moon"
                            />
                            <Route
                                element={<ResponsiveDesign />}
                                path="responsive"
                            />
                        </Route>
                    </Route>
                </Routes>
            </MediaQueryProvider>
        </HashRouter>
    );
};

export default MyRoutes;
