import { Outlet } from 'react-router'

const LoginLayout = () => {
    return (
        <>
            <div className="wrap">
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default LoginLayout