"use client"
import React from 'react'
import SubHeader from './SubHeader'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { isTablet, sticky, _$, isMobile, handleSticky, isViewDesktop } from '../../lib/utils/index'
import BookingBar from '../booking/BookingBar'
import BookingBarMobile from '../booking/BookingBarMobile'

const Header = () => {
  let homeClass: any = "nav-link";
  const [viewCalendarDesktop, setViewCalendarDesktop] = useState(true)
  const [viewCalendarMobile, setViewCalendarMobile] = useState(false)


  useEffect(() => {
    let isDesktop = isViewDesktop();
    if (isDesktop) {
      setViewCalendarMobile(false);
      setViewCalendarDesktop(true);
    } else {
      setViewCalendarMobile(true)
      setViewCalendarDesktop(false)
    }
  }, [viewCalendarDesktop, viewCalendarMobile])


  const hampugerMenuClick = () => {
    let isMenuOpen: any = _$('.navbar #navbarNav').classList.contains('show');
    return !isMenuOpen && _$('.navbar').classList.toggle("menu-open-m");
  }

  const menuClick = () => {
    isMobile() && _$('.navbar-toggler').click();
  }


  return (
    <>
      <header id="myHeader">
        <SubHeader />
        {viewCalendarDesktop && <BookingBar />}
        <nav className="navbar navbar-expand-sm navbar-light mainNav">
          <div className="container">
            {viewCalendarMobile && <div className="logo logo-m">
              <Link aria-label="Wynn Las Vegas Private Access" href="/">
                <Image src="/images/logo.gif" width="130" height="70" alt="Wynn Las Vegas" />
              </Link>
            </div>}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={hampugerMenuClick}>
              <div className="hamburger">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item home">
                  <Link className={homeClass} href="/" onClick={menuClick} >ROOMS & SUITES</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" onClick={menuClick}>WYNN REWARDS</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" onClick={menuClick}>OFFERS</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="/dining" onClick={menuClick}>DINING</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" onClick={menuClick}>CASINO</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" onClick={menuClick}>EXPERIENCES</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" onClick={menuClick}>ENTERTAINMENT</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" onClick={menuClick}>SHOPS</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {viewCalendarMobile && <BookingBarMobile />}
    </>
  )
}

export default Header

