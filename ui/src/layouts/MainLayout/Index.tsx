import { Outlet } from 'react-router'

const Index = () => {
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

export default Index