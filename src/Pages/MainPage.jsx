import React from 'react'
// import { Link } from "react-router-dom";
import '../css/styles.css'
import '../components/MainHeader';
import MainHeader from '../components/MainHeader';
import MainPageBlock from '../components/MainPageBlock'
import FooterBlock from '../components/FooterBlock'

export default function MainPage() {
    return (
        <div >
            <MainHeader />
            <MainPageBlock />
            <FooterBlock />


            <div className='bottomPanel'></div>
        </div>
    )
}
