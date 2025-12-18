import React from "react";
import Popup from "../../components/Popup"
import Button from "../../components/Button";

const History = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
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