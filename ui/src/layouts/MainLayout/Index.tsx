import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Tab from './Tab';

const Index = () => {
    const location = useLocation();
    const showHeaderPaths = [
        "/account",
    ]
    const showHeader = !showHeaderPaths.includes(location.pathname)
    return (
        <>
            <div className="wrap">
                {showHeader && <Header />}
                <div className="content">
                    <Outlet/>
                </div>
                <Tab/>
            </div>
        </>
    )
}

export default Index