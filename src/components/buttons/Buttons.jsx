import React from 'react'
import styles from "./buttons.module.scss"
import user from "../../assets/icons/user.svg"

// width: 118px;
// height: 46px;

export const BtnLogin = () => {
    return (

        <button className={`${styles.buttonLogin} flex items-center text-sm md:text-base 2xl:text-lg font-semibold py-2 px-4 2xl:font-bold md:w-[118px] md:h-[46px] justify-center gap-[10px]`}>
            <svg className='w-[14px] h-[17px] 2xl:w-[16px] 2xl:h-[19px]' viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z" fill="url(#paint0_linear_401_1279)" />
                <defs>
                    <linearGradient id="paint0_linear_401_1279" x1="-7.02825" y1="-22.35" x2="23.9034" y2="-20.9848" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFB800" />
                        <stop offset="1" stop-color="#FF8A00" />
                    </linearGradient>
                </defs>
            </svg>

            <span>Login</span>
        </button>
    )
}