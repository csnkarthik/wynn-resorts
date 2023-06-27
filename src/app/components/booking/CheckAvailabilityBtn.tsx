import Link from "next/link"
import { formatDate } from "@/lib/utils"

const CheckAvailabilityBtn = ({ startDate, endDate, room, guess }: any) => {
  const urlWLV = 'https://reservations.wynnlasvegas.com/ibe/index.aspx?hotelID=13763&langID=1&currID=0'

  return (
    <div className="cta">
      <Link className="btn btn-primary check-availability" href={`${urlWLV}&checkin=${formatDate(startDate)}&checkout=${formatDate(endDate)}&rooms=${room}&adults=${guess}`} target="_blank">check availability</Link>
    </div>
  )
}
export default CheckAvailabilityBtn