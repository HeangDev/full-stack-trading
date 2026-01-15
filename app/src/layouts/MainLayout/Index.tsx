import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Tab from './Tab';

const Index = () => {
    const location = useLocation();
    const showTabPaths = [
        "/home",
        "/market",
        "/order",
        "/account"
    ];

    const showTab = showTabPaths.includes(location.pathname);
    return (
        <>
            <div className="wrap">
                <Header />
                <main className="content">
                    <Outlet/>
                </main>
                {showTab && <Tab/>}
            </div>
        </>
    )
}

export default Index