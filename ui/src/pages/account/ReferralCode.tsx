import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next';

const ReferralCode = () => {
    return (
        <>
            <div className="referralCode__container">
                <div className="referralCode__container__img">
                    <img src="#none" alt=""/>
                </div>
                <div className="referralCode__container__description">
                    <h4>Invite Friends</h4>
                    <p>
                        Share this code with your friend and both of you will get 
                    </p>
                </div>
            </div>
        </>
    )
}

export default ReferralCode