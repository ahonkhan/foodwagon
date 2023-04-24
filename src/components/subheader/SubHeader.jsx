import React from 'react'
import styles from "./subheader.module.scss"
import logo from "../../assets/logo.svg"
import location from "../../assets/icons/map-marker-alt.svg"
import Search from "../../assets/icons/Search.svg"
import user from "../../assets/icons/user.svg"
import { BtnLogin } from '../buttons/Buttons'
const SubHeader = () => {
    return (
        <section id="subheader" className={`${styles.subHeader} flex fixed top-0 left-0 w-full items-center min-h-[48px] md:min-h-[58px]  xl:h-[68px] 2xl:h-[78px]`}>
            <div className="food_container flex justify-between items-center mx-auto">
                <div className="subheader__logo shrink-0">
                    <a href="">
                        <img className='h-7 md:h-7 xl:h-auto' src={logo} alt="Food Wagon" loading='lazy' />
                    </a>
                </div>
                <div className="subheader__middleText hidden lg:block">
                    <p className={`flex  text-sm md:text-base 2xl:text-lg ${styles.subheader__middleText} items-center`}>
                        <span className='font-semibold 2xl:font-bold'>Deliver to:</span>
                        <img src={location} className='ml-[12px] mr-[9px]' alt="" />
                        Current Location
                        <span className='ml-[4px] font-semibold 2xl:font-bold'> Mohammadpur Bus Stand, Dhaka</span>
                    </p>
                </div>
                <div className="subheader__right flex items-center gap-[16px] md:gap-[24px] xl:gap-[28px] 2xl:gap-[30px]">
                    <button className={`${styles.buttonSearch} font-semibold 2xl:font-bold text-sm md:text-base 2xl:text-lg flex items-center justify-center gap-[8px]`}>
                        <img src={Search} alt="" />
                        <span>Search Food</span>
                    </button>
                    <BtnLogin />
                </div>

            </div>
        </section>
    )
}

export default SubHeader