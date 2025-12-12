
import IcSort from "../assets/img/ic/ic_sort.png"

const Table = () => {
    return (
        <>
            <div className="table__container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className="">
                                    <span>Name</span>
                                    <span><img src={IcSort}/></span>
                                </div>
                            </th>
                            <th>
                                <div className="">
                                    <span>Last Price</span>
                                    <span><img src={IcSort}/></span>
                                </div>
                            </th>
                            <th>
                                <div className="">
                                    <span>24 chg%</span>
                                    <span><img src={IcSort}/></span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default Table