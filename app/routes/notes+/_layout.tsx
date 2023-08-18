import { Outlet } from "@remix-run/react";

export default function Layout() {
    return (<div>
        <h1>I'm the layout for this</h1>
        <Outlet />
    </div>)
}