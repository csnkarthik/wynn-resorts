'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from 'react'
import { addDays, differenceInDays, addMonths, isSameMonth } from 'date-fns'
import { _$, $all, isViewDesktop } from "@/lib/utils"
import Calendar from "./Calendar"
import Ctas from "./Ctas"
import CheckInOut from "./CheckInOut"
import RoomsGuess from "./RoomsGuess"
import CheckAvailabilityBtn from "./CheckAvailabilityBtn"
import FooterText from "./FooterText"

const BookingBar = () => {
  const [viewCalendarDesktop, setViewCalendarDesktop] = useState(true)
  const [diffInDays, setDiffInDays] = useState(1);
  const [room, setRoom] = useState(1);
  const [guess, setGuess] = useState(2);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  // const useMountEffect = (fun: any) => useEffect(fun, []);
  // const executeScroll = () => refOne?.current?.scrollIntoView();
  // useMountEffect(executeScroll);
  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: 'selection',
  }])

  const { startDate, endDate } = range[0];

  useEffect(() => {
    // set the checkOut is next day if not choosing on calendar when Close Calendar
    (!open && startDate == endDate) && setRange([{
      startDate: startDate,
      endDate: addDays(startDate, 1),
      key: 'selection',
    }])

    isViewDesktop() ? setViewCalendarDesktop(true) : setViewCalendarDesktop(false);
    if (open) {
      document.body.style.overflowY = "hidden"
      document.addEventListener("keydown", (e) => hideOnEscape(e.target), true)
      document.addEventListener("click", (e) => { hideOnClickOutside(e.target) }, true)
      setDiffInDays(differenceInDays(endDate, startDate))
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [setOpen, refOne, open, startDate, endDate, range, viewCalendarDesktop])

  // Select the date
  const handleSelect = (item: any) => {
    const maxSelectedDay = 14;
    const elCheckIn = _$('.check-in')?.classList;
    const elCheckOut = _$('.check-out')?.classList;
    const preButton = _$('.rdrMonthAndYearWrapper >button');
    const resetBtn = _$('.btn-reset-calendar')

    let startDate1 = item.selection.startDate;
    let endDate1 = item.selection.endDate;
    let isCurrMonth = isSameMonth(new Date, startDate1);

    elCheckIn?.toggle('active');
    elCheckOut?.toggle('active');
    isCurrMonth && preButton?.classList.add("disabled");
    !isCurrMonth && preButton?.classList.remove("disabled");
    !isCurrMonth && resetBtn?.classList.remove("disabled");
    (differenceInDays(endDate1, startDate1) > maxSelectedDay) && (item.selection.endDate = addDays(startDate1, maxSelectedDay));
    setRange([item.selection]);
    !isViewDesktop() && console.log("mobile");

    !isViewDesktop() && _$('.rdrDayNumber').scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

  const navButtons = $all('.rdrMonthAndYearWrapper button') || []
  isSameMonth(new Date, startDate) && navButtons[0]?.classList.add("disabled")

  navButtons.forEach((item: any) => {
    item.addEventListener("click", (e: any) => {
      const resetBtn = _$('.btn-reset-calendar')
      const currMonthDom = _$('.rdrMonths >.rdrMonth >.rdrMonthName');
      let isCurrMonth = isSameMonth(addMonths(new Date, 1), new Date(currMonthDom?.textContent));
      !isCurrMonth ? resetBtn?.classList.remove("disabled") : resetBtn?.classList.add("disabled");
      (e.target == navButtons[0]) ? isCurrMonth && navButtons[0]?.classList.add("disabled") : navButtons[0]?.classList.remove("disabled");
    })
  })

  // hide dropdown on ESC press
  const hideOnEscape = (el: any) => {
    if (el.key === "Escape") {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (el: any) => {
    const curr: any = refOne?.current
    if ((curr && !curr.contains(el))) {
      setOpen(false)
    }
  }

  return (
    <div className="calendarWrap">
      {open &&
        <div className="date-picker open">
          <div ref={refOne} className={viewCalendarDesktop ? "container" : "container mobile"}>
            <Calendar range={range} handleSelect={handleSelect} viewCalendarDesktop={viewCalendarDesktop} />

            {/* For Calendar Desktop */}
            {viewCalendarDesktop && <>
              <div className="header-text">{diffInDays}-night stay</div>
              <FooterText />
              <Ctas setRange={setRange} setDiffInDays={setDiffInDays} setOpen={setOpen} />
            </>}

            {/* For Calendar Mobile */}
            {!viewCalendarDesktop && <div className="calendar">
              <div className="footerCalendar">
                <div className="header-text">{diffInDays}-night stay</div>
                <Ctas range={range} setRange={setRange} setDiffInDays={setDiffInDays} setOpen={setOpen} />
                <div className="booking-bar room-guess">
                  <RoomsGuess room={room} setRoom={setRoom} guess={guess} setGuess={setGuess} />
                </div>
                <FooterText />
              </div>
            </div>}
          </div>
        </div>
      }

      {/* For Booking Bar */}
      <div className="booking-bar">
        <div className="container">
          <div className="row booking-wrap">
            <div className="col logo">
              <Link aria-label="Wynn Las Vegas Private Access" href="/"><Image src="/images/logo.gif" width="130" height="70" alt="Wynn Las Vegas" /></Link>
            </div>
            <div className="col">
              <form className="booking-room">
                <CheckInOut startDate={startDate} endDate={endDate} setOpen={setOpen} open={open} />
                {viewCalendarDesktop && <div className="room-guess">
                  <RoomsGuess room={room} setRoom={setRoom} guess={guess} setGuess={setGuess} />
                </div>
                }
                <CheckAvailabilityBtn startDate={startDate} endDate={endDate} room={room} guess={guess} />
              </form>
            </div>
          </div>
        </div >
      </div>
    </div >
  )
}

export default BookingBar



