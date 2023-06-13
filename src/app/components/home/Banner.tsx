"use client"

import Image from 'next/image'
import { _$ } from "@/lib/utils";
import { bottom } from '@popperjs/core';

const Banner = () => {

  return (
    <>
      <section className="banner">
        <div className="img desktop">
          <Image
            alt='Cover Image'
            src='/images/banner-desktop.jpg'
            width={1371}
            height={428}
          ></Image>
        </div>
        <div className="img mobile">
          <Image
            alt='Cover Image'
            src='/images/banner-m.jpg'
            width={1002}
            height={6844} />
        </div>
      </section>
      <section className='headline'>
        <div className="container">
          <h1 className="marketing-title" tabIndex={0}> A Five-Star City Deserves a Five-Star Resort.</h1>
          <p className="copy-wrap" tabIndex={0}>Boston is a city of champions, a place for the greats and known for its milestone moments in history. A cultural epicenter, our city attracts millions of visitors every year to enjoy our rich heritage and distinct offerings. Encore Boston Harbor invites relaxation, fun and excitement at every turn. From lavishly appointed rooms and extraordinary restaurants for casual and fine dining to thrilling games, inventive spa treatments and chic shopping, every demand is anticipated and every need is met with impeccable service. Only in Boston, only at Encore Boston Harbor, a hospitality experience that defines Five-Star.
          </p>
          <p style={{ marginBottom: '120px' }}></p>
        </div>
      </section>
    </>
  )
}

export default Banner