import React from 'react'
import styles from "./header.module.scss"
import SubHeader from '../subheader/SubHeader'
import headerBg from "../../assets/img/header-bg.png"
const Header = () => {
    return (
        <header className={`${styles.header} pt-[48px] md:pt-[58px]  xl:pt-[68px] 2xl:pt-[78px]`}>
            <SubHeader />


            <section id="bannar" style={{ backgroundImage: "url('" + headerBg + "')" }} className='min-h-screen flex bg-no-repeat  md:min-h-[500px] 2xl:min-[620px]'>
                <div className={`${styles.header__left} xl:w-[600px] 2xl:w-[856px]`}>
                    <div className={`${styles.title}`}>
                    </div>
                </div>
                <div className="header__right"></div>
            </section>
        </header>
    )
}

export default Header