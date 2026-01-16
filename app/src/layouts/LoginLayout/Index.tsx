import { Outlet } from 'react-router'

const LoginLayout = () => {
    return (
        <>
            <div className="wrap">
                <main className="h-screen py-9 px-3 overflow-y-scroll">
                    <Outlet/>
                </main>
            </div>
        </>
    )
}

export default LoginLayout