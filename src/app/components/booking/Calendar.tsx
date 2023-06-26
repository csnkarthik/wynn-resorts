import { DateRangePicker } from 'react-date-range'
const Calendar = ({ range, handleSelect, viewCalendarDesktop }: any) => {
  console.log(viewCalendarDesktop, 'view')
  return (
    <DateRangePicker
      onChange={(item) => handleSelect(item)}
      editableDateInputs={false}
      moveRangeOnFirstSelection={false}
      ranges={range}
      months={2}
      direction="horizontal"
      className="calendarElement"
      minDate={new Date()}
      showMonthAndYearPickers={false}
      dateDisplayFormat={'MM/dd/yyyy'}
      rangeColors={['#4B2A0B ', '#4B2A0B ', '#4B2A0B ']}
      fixedHeight={true}
      showDateDisplay={false}
      scroll={viewCalendarDesktop ? { enabled: false } : { enabled: true }}
    />
  )
}

export default Calendar