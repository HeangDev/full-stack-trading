import React from "react";
import Popup from "../../components/Popup"
import Button from "../../components/Button";
import TabContextProvider from "../../components/Tab/TabContext"
import TabList from "../../components/Tab/TabList"
import Tab from "../../components/Tab/Tab"
import TabPanel from "../../components/Tab/TabPanel"

import ImgNoData from "../../assets/img/bg/bg_nodata.png"

const History = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('1');
    return (
        <>
            <div className="historyPanel__container">
                <TabContextProvider value={value} onChange={setValue}>
                    <TabList>
                        <Tab label="Withdraw" value="1" />
                        <Tab label="Deposit" value="2" />
                    </TabList>

                    <TabPanel value="1">
                        <div className="nodata__container">
                            <div className="nodata__img">
                                <img src={ImgNoData}/>
                            </div>
                            <div className="nodata__title">
                                <h4>No Data</h4>
                                <p>There is no data to show you right now</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="nodata__container">
                            <div className="nodata__img">
                                <img src={ImgNoData}/>
                            </div>
                            <div className="nodata__title">
                                <h4>No Data</h4>
                                <p>There is no data to show you right now</p>
                            </div>
                        </div>
                    </TabPanel>
                </TabContextProvider>
            </div>
            <Popup
                open={open}
                onClose={() => setOpen(false)}
            >
                <form autoComplete="off">
                    <div className="betPanel__container">
                        <div className="timer__container">
                            <div className="timer__row">
                                {[30, 60, 90, 120].map(time => (
                                        <div
                                            className="item"
                                            key={time}
                                        >
                                            End Time
                                            <span>{time}<small>s</small></span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="amount__container">
                            
                        </div>
                        <div className="result__container">

                        </div>
                        <Button type="button" color="success">Confirm Order</Button>
                    </div>
                </form>
            </Popup>            
        </>
    )
}

export default History