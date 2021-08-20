import { Outlet } from "react-router-dom";

import { DashboardHeader } from "../../templates/DashBoardHeader";

export const HomeLayout = () => {
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    );
};
