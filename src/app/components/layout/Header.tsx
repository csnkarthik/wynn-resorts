"use client"
import React from 'react'
import SubHeader from './SubHeader'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { _$, isMobile, isViewDesktop } from '@/lib/utils/index'
import BookingBar from '../booking/BookingBar'
import BookingBarMobile from '../booking/BookingBarMobile'
import { usePathname } from 'next/navigation'

const Header = () => {
  let homeClass: any = "nav-link";
  const pathName = usePathname();

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

  // const menuClick = () => {
  //   isMobile() && _$('.navbar-toggler').click();
  // }


  return (
    <>
      <header id="myHeader">
        <SubHeader />
        {viewCalendarDesktop && <BookingBar />}
        <nav className="navbar navbar-expand-sm navbar-light mainNav">
          <div className="container">
            {<div className="logo logo-m">
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
                  <Link className={homeClass} href="/" >ROOMS & SUITES</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#">WYNN REWARDS</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" >OFFERS</Link>
                </li>
                <li className="nav-item">
                  <Link className={pathName == "/dining" ? "nav-link active" : "nav-link"} href="/dining/">DINING</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#">CASINO</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" >EXPERIENCES</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#" >ENTERTAINMENT</Link>
                </li>
                <li className="nav-item">
                  <Link className={homeClass} href="#">SHOPS</Link>
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

