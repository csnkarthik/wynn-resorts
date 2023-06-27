"use client";
import { useState } from 'react';
import { handleSticky, $all, _$ } from '@/lib/utils';
import DiningBanner from '@/components/dining/DiningBanner';
import Promotion from '@/components/dining/_Promotion';
import PostCard from '@/components/dining/PostCard';
import Menu from '@/components/dining/_menu';
import { getRestaurants, getInfoDiningPage, getMeuList, getRestaurantsCategories } from '../api/data';

const Dining = async () => {
  const infoDiningPageData: any = getInfoDiningPage();
  const restaurantsData: any = getRestaurants();
  const menuListData: any = getMeuList();
  const categoriesArrData: any = getRestaurantsCategories() || [];
  const [infoDiningPage, restaurants, menuList, categoriesArr] = await Promise.all([infoDiningPageData, restaurantsData, menuListData, categoriesArrData]);

  // const [idRestaurant, setIdRestaurant] = useState('')

  const handleMenuClick = (e: any) => {
    // const idMenu = e.target.getAttribute("id-menu");
    // setIdRestaurant(idMenu);
    e.preventDefault()
    e.stopPropagation();
    handleSticky();
  }

  const handleFilter = ((target: any, cat: string) => {
    const arr: any = $all(".dining-wrap")
    const arr1: any = $all(".filter li")
    const arr2: any = $all(".dining-wrap")

    arr1.forEach((item: any) => item.classList.remove("active"));
    arr2.forEach((item: any) => item.classList.remove("active"));
    (cat === "All") ? arr?.forEach((item: any) => item.classList.add("active")) : _$(".dining-wrap[data-id='" + cat + "']").classList.add("active")
    target.classList.toggle("active")

  });
  return (
    <>
      <main>
        <DiningBanner diningPage={infoDiningPage} diningDetail={restaurants} />
        {infoDiningPage.promotion && <Promotion promotion={infoDiningPage} />}
        <section>
          <div className="container">
            <div className='filter'>
              <ul>
                <li className="active" onClick={(e) => { e.preventDefault(); handleFilter(e.target, "All") }}>All</li>
                {categoriesArr?.category.map((cat: string, i: number) => (<li key={i} onClick={(e) => { e.preventDefault(); handleFilter(e.target, cat) }}>{cat}</li>))}
              </ul>
            </div>
            {categoriesArr?.category?.map((cat: string, i: number,) => (
              <div className='dining-wrap active' key={i} data-id={cat} >
                <h2 className="h2 text-center" tabIndex={0}>{cat}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 listCards">
                  {restaurants?.map((restaurant: any, i: any) => (
                    (cat == restaurant.fields.category) && <PostCard key={restaurant.fields.slug} restaurant={restaurant} handleMenuClick={handleMenuClick} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {menuList && <Menu />}
    </>
  )
}


export default Dining
