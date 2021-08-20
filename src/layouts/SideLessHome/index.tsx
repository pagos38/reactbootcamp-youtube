import { Outlet } from "react-router-dom";

import { DashboardHeader } from "../../templates/DashBoardHeader";

export const SideLessHomeLayout = () => {
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    );
};
