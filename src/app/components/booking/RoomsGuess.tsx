
const RoomsGuess = ({ room, setRoom, guess, setGuess }: any) => {
  const maxNumber = 4;
  const minNumber = 1;

  return (
    <>
      <div className="room">
        <div className="room-numbers">
          <label htmlFor="room-numbers">Rooms</label>
          <div>
            <button className={room > minNumber ? 'icon-btn' : 'icon-btn disabled'} onClick={(e: any) => {
              e.preventDefault();
              setRoom(room - 1)
            }}><i className="bi bi-dash-circle"></i></button>
            <input id="room-numbers" className="num-room-guess text-center" value={room} readOnly></input>
            <button className={room >= maxNumber ? 'icon-btn disabled' : 'icon-btn'} onClick={(e: any) => {
              e.preventDefault();
              setRoom(room + 1)
            }}><i className="bi bi-plus-circle"></i></button>
          </div>
        </div>
      </div>
      <div className="guess-numbers">
        <label htmlFor="guess-numbers">Guests per room</label>
        <div className="text-center">
          <button className={guess > minNumber ? 'icon-btn' : 'icon-btn disabled'} onClick={(e: any) => {
            e.preventDefault();
            setGuess(guess - 1)
          }}><i className="bi bi-dash-circle"></i></button>
          <input id="guess-numbers" className="num-room-guess text-center" value={guess} readOnly></input>
          <button className={guess >= maxNumber ? 'icon-btn disabled' : 'icon-btn'} onClick={(e: any) => {
            e.preventDefault();
            setGuess(guess + 1)
          }}><i className="bi bi-plus-circle"></i></button>
        </div>
      </div>
    </>
  )
}

export default RoomsGuess