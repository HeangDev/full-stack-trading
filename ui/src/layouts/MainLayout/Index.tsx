import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Tab from './Tab';

const Index = () => {
    const location = useLocation();
    const showHeaderPaths = [
        "/home",
        "/activity",
        "/account",
    ];
    const showHeader = !showHeaderPaths.includes(location.pathname);

    const showTabPaths = [
        "/home",
        "/activity",
        "/order",
        "/account"
    ];

    const showTab = showTabPaths.includes(location.pathname);
    return (
        <>
            <div className="wrap">
                {showHeader && <Header />}
                <div className="content">
                    <Outlet/>
                </div>
                {showTab && <Tab/>}
            </div>
        </>
    )
}

export default Index