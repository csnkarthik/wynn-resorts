import { _$ } from "@/lib/utils";
import { addDays } from "date-fns";

const Ctas = ({ setRange, setDiffInDays, setOpen }: any) => {

  const handleReset = () => {
    setRange([{
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'

    }]);
    setDiffInDays(1)
    _$('.btn-reset-calendar ')?.classList.add("disabled")
  }

  return (
    <div className="cta-footer">
      <button className="btn btn-secondary btn-reset-calendar disabled" onClick={() => handleReset()}>Reset</button>
      <button className='btn btn-secondary' onClick={() => setOpen(!open)}>Close</button>
    </div>
  )
}

export default Ctas