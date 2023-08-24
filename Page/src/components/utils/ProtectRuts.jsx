import { Navigate, Outlet } from "react-router-dom";

function ProtectRuts({canActivate, redirectPath="/"}) {
    if (!canActivate) {
        return <Navigate to={redirectPath} replace/>
    } 
    return ( 
        <>
        <Outlet/>
        </>
     );
}

export default ProtectRuts;