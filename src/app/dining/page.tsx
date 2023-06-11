'use client'

import { handleSticky, $all, _$ } from '@/lib/utils';
import DiningBanner from '@/components/dining/DiningBanner';
import Promotion from '@/components/dining/Promotion';
import PostCard from '@/components/dining/PostCard';
import Menu from '@/components/dining/Menu';
import { getRestaurants, getInfoDiningPage, getRestaurantsCategories } from '../api/data'

const Dining = async () => {

  //Get Data from API
  const infoDiningPageData: any = getInfoDiningPage();
  const restaurantsData: any = getRestaurants();
  const categoriesArrData: any = getRestaurantsCategories() || [];
  const [infoDiningPage, restaurants, categoriesArr] = await Promise.all([infoDiningPageData, restaurantsData, categoriesArrData]);

  const handleMenuClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation();
    handleSticky();
  }

  const handleFilter = ((target: any, cat: string) => {
    const arr1: any = $all(".filter li")
    const arr2: any = $all(".dining-wrap")

    arr1.forEach((item: any) => item.classList.remove("active"));
    arr2.forEach((item: any) => item.classList.remove("active"));
    (cat === "All") ? arr2?.forEach((item: any) => item.classList.add("active")) : _$(".dining-wrap[data-id='" + cat + "']").classList.add("active")
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
      <Menu />
    </>
  )
}

export default Dining
