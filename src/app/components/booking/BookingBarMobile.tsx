import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import { _$ } from "@/lib/utils/index";
import { disableStatusBooking, validateBookingDate, handleSelect, handleOpenCalendar, handleReset, urlWLV } from "@/lib/utils/booking"


const BookingBarMobile = () => {
  const elGuessMinus = _$('.btn-guess-minus')?.classList
  const elRoomMinus = _$('.btn-room-minus')?.classList
  const elGuessPlus = _$('.btn-guess-plus')?.classList
  const elRoomPlus = _$('.btn-room-plus')?.classList
  const elBtnReset = _$('.btn-reset-calendar')?.classList
  const elCheckIn = _$('.check-in')?.classList
  const elCheckOut = _$('.check-out')?.classList

  const [diffInDays, setDiffInDays] = useState(1);
  const [room, setRoom] = useState(1);
  const [guess, setGuess] = useState(2);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: 'selection'
  }])

  useEffect(() => {
    let selectedDate = (endDate: any) => {
      return ({
        startDate: range[0].startDate,
        endDate: endDate,
        key: 'selection'
      })
    }

    disableStatusBooking(guess, room, elGuessMinus, elRoomMinus, elGuessPlus, elRoomPlus)
    validateBookingDate(range[0].endDate, range[0].startDate, setDiffInDays, setRange, selectedDate, elBtnReset, setOpen, refOne, open)
  }, [range, open, guess, room, elCheckIn, elCheckOut, elGuessMinus, elRoomMinus, elGuessPlus, elRoomPlus, elBtnReset])


  return (
    <div className="calendarWrap mobile">
      {open &&
        <div className="date-picker open">
          <div ref={refOne} className="container">
            <button className="btn-close-calendar" onClick={() => setOpen(open => !open)}><i className="bi bi-x-circle"></i></button>
            <div className="calendar">
              <DateRangePicker
                onChange={(item) => handleSelect(item, setRange, elCheckIn, elCheckOut)}
                editableDateInputs={false}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={12}
                direction="horizontal"
                className="calendarElement"
                minDate={new Date()}
                showMonthAndYearPickers={true}
                dateDisplayFormat={'MM/dd/yyyy'}
                rangeColors={['#4B2A0B ', '#4B2A0B ', '#4B2A0B ']}
                fixedHeight={true}
              />
              <div className="footerCalendar">
                <div className="header-text">{diffInDays}-night stay</div>
                <button className="btn btn-secondary btn-reset-calendar disabled" onClick={() => handleReset(range, setRange, elBtnReset, elCheckOut, elCheckIn)}>Reset</button>
                <div className="booking-bar room-guess">
                  <div className="room">
                    <div className="room-numbers">
                      <label htmlFor="room-numbers">Rooms</label>
                      <div>
                        <button className="icon-btn btn-room-minus disabled" onClick={(e: any) => {
                          e.preventDefault();
                          setRoom(room - 1)
                        }}><i className="bi bi-dash-circle"></i></button>
                        <input id="room-numbers" className="num-room-guess text-center" value={room} readOnly></input>
                        <button className="icon-btn btn-room-plus" onClick={(e: any) => {
                          e.preventDefault();
                          setRoom(room + 1)
                        }}><i className="bi bi-plus-circle"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="guess-numbers">
                    <label htmlFor="guess-numbers">Guests per room</label>
                    <div className="text-center">
                      <button className="icon-btn btn-guess-minus" onClick={(e: any) => {
                        e.preventDefault();
                        setGuess(guess - 1)
                      }}><i className="bi bi-dash-circle"></i></button>
                      <input id="guess-numbers" className="num-room-guess text-center" value={guess} readOnly></input>
                      <button className="icon-btn btn-guess-plus" onClick={(e: any) => {
                        e.preventDefault();
                        setGuess(guess + 1)
                      }}><i className="bi bi-plus-circle"></i></button>
                    </div>
                  </div>
                </div>
                <p className="footer-text">You only able to book a maximum of 14 nights</p>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="booking-bar">
        <div className="container">
          <div className="row booking-wrap">
            <div className="col logo">
              <Link aria-label="Wynn Las Vegas Private Access" href="/"> <Image src="/images/logo.gif" width="130" height="70" alt="Wynn Las Vegas" /></Link>
            </div>
            <div className="col">
              <form className="booking-room">
                <div className="check-in-out">
                  <div className="check-in active">
                    <label htmlFor="check-in">Check In</label>
                    <input id="check-in" value={`${format(range[0].startDate, "MM/dd/yyyy")}`} readOnly onClick={() => handleOpenCalendar(setOpen, elCheckOut, elCheckIn)}></input>
                  </div>
                  <div className="check-out">
                    <label htmlFor="check-out">Check Out</label>
                    <input id="check-out" value={`${format(range[0].endDate, "MM/dd/yyyy")}`} readOnly onClick={() => handleOpenCalendar(setOpen, elCheckOut, elCheckIn)}></input>
                  </div>
                </div>
                <div className="cta">
                  <Link className="btn btn-primary check-availability" href={`${urlWLV}&checkin=${format(range[0].startDate, "MM/dd/yyyy")}&checkout=${format(range[0].endDate, "MM/dd/yyyy")}&rooms=${room}&adults=${guess}`} target="_blank">check availability</Link>
                </div>
              </form>
            </div>
          </div>
        </div >
      </div>

    </div >
  )
}

export default BookingBarMobile



