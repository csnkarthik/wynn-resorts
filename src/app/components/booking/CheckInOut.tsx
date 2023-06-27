import { formatDate } from "@/lib/utils"

const CheckInOut = ({ startDate, endDate, setOpen, open }: any) => {
  return (
    <div className="check-in-out">
      <div className="check-in active">
        <label htmlFor="check-in">Check In</label>
        <input id="check-in" value={`${formatDate(startDate)}`} readOnly onClick={() => setOpen(!open)}></input>
      </div>
      <div className="check-out">
        <label htmlFor="check-out">Check Out</label>
        <input id="check-out" value={`${formatDate(endDate)}`} readOnly onClick={() => setOpen(!open)}></input>
      </div>
    </div>
  )
}

export default CheckInOut