import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
    return (
        <div>
            <h1>DashBoard</h1>
            <Outlet />
        </div>
    );
};
