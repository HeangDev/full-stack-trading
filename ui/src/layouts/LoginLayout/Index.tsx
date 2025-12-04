import { Outlet } from 'react-router'
import Header from '../MainLayout/Header'

const LoginLayout = () => {
    return (
        <>
            <div className="wrap">
                <Header/>
                <div className="h-screen px-6 pb-24">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default LoginLayout