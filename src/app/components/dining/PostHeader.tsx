"use client"

import Image from 'next/image'
import { _$, handleSticky, $id } from '@/lib/utils';
import { format } from 'date-fns'

const PostHeader = ({ restaurant }: any) => {
  const { name, desktopBanner, mobileBanner, subTitle, shortDescription, menu } = restaurant?.fields

  const handleReserve = (e: any) => {
    e.preventDefault();
    const reserveInfo = {
      restaurant: name,
      startDate: format(new Date(), "MM/dd/yyyy"),
      people: "2 Guests",
      time: "5:00 PM"
    }
    // handleSticky()
    alert(`Reserve table info "\n" Restaurant:${reserveInfo.restaurant}"\n" People:${reserveInfo.people}"\n" Date:${reserveInfo.startDate}"\n" Time:${reserveInfo.time}`)
  };

  return (
    <>
      <section className="banner">
        <div className="img desktop">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + desktopBanner?.fields.file.url}
            width={desktopBanner?.fields.file.details.image.width}
            height={desktopBanner?.fields.file.details.image.height}
          />
        </div>
        <div className="img mobile">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + mobileBanner.fields.file.url}
            width={mobileBanner.fields.file.details.image.width}
            height={mobileBanner.fields.file.details.image.height}
          />
        </div>
        <div className="headline-box">
          <div className="content-wrap">
            <div className="headerContent">
              <h1 className="marketing-title" tabIndex={0}>
                <span className="page-title">{subTitle}</span>
                {name}
              </h1>
              <div className="copy-wrap" tabIndex={0}>{shortDescription}</div>
              <div className='ctas'>
                {menu && <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target=".menuModal">View Menu</button>}
                <button className='btn btn-primary' onClick={handleReserve}>Reserve A Table</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostHeader