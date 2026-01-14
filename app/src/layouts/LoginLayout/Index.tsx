import { Outlet } from 'react-router'

const LoginLayout = () => {
    return (
        <>
            <div className="wrap">
                <div className="h-screen py-9 px-3 overflow-y-scroll">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default LoginLayout