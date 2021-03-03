import React from 'react'
// import { Link } from "react-router-dom";
import '../css/styles.css'
import '../components/MainHeader';
import MainHeader from '../components/MainHeader';
import MainPageBlock from '../components/MainPageBlock'

export default function MainPage() {
    return (
        <div >
            <MainHeader />
            <MainPageBlock>
                dfg
                <p>ThisThisThisThisThisThisThisThisTh
                isThisThisThisThisThisThisThisThis
                ThisThisThisThisThisThisThisThisThi
                sT
                hisThisThisThisThisThisThisThisTh
                isThisThisThisThisThisThisThisThis
                ThisThisThisThisThisThisThisThisThisThisThisThisThisThisThisThisThis
                ThisThisThisThisThisT
                hisThisThisThisThisThisThisThisTh
                isThisThisThisThisThisThisThisThis</p>

            </MainPageBlock>





            {/* <div className='topPanel'>
                <span>MAIN PAGE</span>
                <div className='topPanelLogin'>
                    <Link to='/LoginPage'>Sign in </Link>
                    <Link to='LoginPage'>Sign up</Link>

                </div> */}


            {/* </div> */}
            {/* <Link to='/NoteBook'>NoteBook</Link> */}
            <div className='bottomPanel'></div>
        </div>
    )
}
