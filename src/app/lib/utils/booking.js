import { addDays, format, differenceInDays } from 'date-fns'

export const urlWLV = 'https://reservations.wynnlasvegas.com/ibe/index.aspx?hotelID=13763&langID=1&currID=0'

export const disableStatusBooking = (guess, room, elGuessMinus, elRoomMinus, elGuessPlus, elRoomPlus) => {
  (guess < 2) ? elGuessMinus?.add('disabled') : elGuessMinus?.remove('disabled');
  (room < 2) ? elRoomMinus?.add('disabled') : elRoomMinus?.remove('disabled');
  (guess > 3) ? elGuessPlus?.add('disabled') : elGuessPlus?.remove('disabled');
  (room > 3) ? elRoomPlus?.add('disabled') : elRoomPlus?.remove('disabled')
}


export const validateBookingDate = (endDate, startDate, setDiffInDays, setRange, selectedDate, elBtnReset, setOpen, refOne, open) => {
  if (open) {
    document.body.style.overflowY = "hidden"
    const diff = differenceInDays(endDate, startDate);
    setDiffInDays(diff)
    if (startDate == endDate) {
      setRange([selectedDate(addDays(startDate, 1))])
    } else if (addDays(startDate, 14) < endDate) {
      setRange([selectedDate(addDays(startDate, 14))])
    } else if (format(startDate, "MM/dd/yyyy") != format((new Date()), "MM/dd/yyyy") && (format(endDate, "MM/dd/yyyy") != format(addDays(new Date(), 1), "MM/dd/yyyy"))) {
      elBtnReset?.remove('disabled')
    } else {
      elBtnReset?.add('disabled')
    }
  } else {
    document.body.style.overflowY = "auto"
  }

  open && document.addEventListener("keydown", (e) => hideOnEscape(e.target, setOpen), true)
  open && document.addEventListener("click", (e) => {
    hideOnClickOutside(e.target, refOne, setOpen);
  }, true)
}


// Open the Calendar
export const handleOpenCalendar = (setOpen, elCheckOut, elCheckIn) => {
  setOpen(true)
  elCheckOut.remove('active');
  elCheckIn.add('active');
}

// Select the date
export const handleSelect = (item, setRange, elCheckIn, elCheckOut) => {
  setRange([item.selection]);
  elCheckIn?.toggle('active');
  elCheckOut?.toggle('active');
}

// Reset button press
export const handleReset = (range, setRange, elBtnReset, elCheckOut, elCheckIn) => {
  setRange([{
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: 'selection'
  }]);

  const isToday = (format(range[0].startDate, "MM/dd/yyyy") == format(new Date(), "MM/dd/yyyy"));

  isToday ? elBtnReset?.add('disabled') : elBtnReset?.add('remove')
  elCheckOut?.remove('active');
  elCheckIn?.add('active');
}

// hide dropdown on ESC press
export const hideOnEscape = (el, setOpen) => {
  if (el.key === "Escape") {
    setOpen(false)
  }
}

// Hide dropdown on outside click
export const hideOnClickOutside = (el, refOne, setOpen) => {
  const curr = refOne.current
  if ((curr && !curr.contains(el))) {
    setOpen(false)
  }
}