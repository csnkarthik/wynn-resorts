
"use client"

import Image from "next/image"

const Menu = () => {
  const categoryArr = ["Starters", "Platters", "Main", "Dessert"]
  const url = "/images/logo-menu.png"
  return (
    <div className="modal fade fullView menuModal" id="menuModal" data-menu={'idRestaurant'} tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close" ></button>
            <div className="container">
              <div className="header">
                <div className="logo">
                  <Image
                    alt={`Cover Image`}
                    src={url}
                    width='140'
                    height='70'
                    className="card-img-top"
                  />

                </div>
                <p className="chef">By Executive Pastry Chef Kimberly Beatrix</p>
              </div>
              <div className="list">
                <div className="row row-cols-1 row-cols-md-2">
                  {categoryArr.map((cat: string, i: number,) => (
                    <div className="col" key={i} data-id={cat} >
                      <h3>{cat}</h3>
                      <div className="">
                        <p className="name">New England Oysters* (1)</p>
                        <p>Chefs selection of local oysters from Maine to The Cape | Half Dozen</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Menu