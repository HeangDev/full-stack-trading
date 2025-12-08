import { Outlet } from 'react-router'

const LoginLayout = () => {
    return (
        <>
            <div className="wrap">
                <div className="h-screen pt-9 px-6 pb-27 overflow-y-scroll">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default LoginLayout