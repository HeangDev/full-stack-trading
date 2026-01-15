import React from 'react';
import TabContextProvider from "../../components/Tab/TabContext"
import TabList from "../../components/Tab/TabList"
import Tab from "../../components/Tab/Tab"
import TabPanel from "../../components/Tab/TabPanel"

import ImgNoData from "../../assets/img/bg/bg_nodata.png"

import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t } = useTranslation();
    const [value, setValue] = React.useState('1');

    return (
        <>
            <div className="orderPanel__container">
                <TabContextProvider value={value} onChange={setValue}>
                    <TabList>
                        <Tab label={t('order.buy_sell')} value="1" />
                        <Tab label={t('order.record')} value="2" />
                    </TabList>

                    <TabPanel value="1">
                        <div className="nodata__container">
                            <div className="nodata__img">
                                <img src={ImgNoData} loading="lazy" alt=""/>
                            </div>
                            <div className="nodata__title">
                                <h4>{t('nodata.nodata_empty_title')}</h4>
                                <p>{t('nodata.nodata_empty_dec')}</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="nodata__container">
                            <div className="nodata__img">
                                <img src={ImgNoData} loading="lazy" alt=""/>
                            </div>
                            <div className="nodata__title">
                                <h4>{t('nodata.nodata_empty_title')}</h4>
                                <p>{t('nodata.nodata_empty_dec')}</p>
                            </div>
                        </div>
                    </TabPanel>
                </TabContextProvider>
            </div>
        </>
    )
}

export default Index