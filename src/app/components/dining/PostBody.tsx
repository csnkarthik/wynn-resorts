"use client"

import RichText from '../RichText'
import Gallery from './Gallery';
import Info from './Info';
import TwoCols from './TwoCols';
import Testimonial from './Testimonial';
import FAQs from './FAQs';
import Recommendation from './Recommendation';
import Modal from './Modal';

const PostBody = ({ restaurant, handleMenuClick }: any) => {
  const { content, gallery, specialMeal, testimonial, faqList, recommendationRestaurants } = restaurant?.fields;

  return (
    <>
      <div className="container">
        <section className='aboutRestaurant'>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <div className="copy-wrap" tabIndex={0}>
                <RichText content={content} />
              </div>
            </div>
            <div className="col">
              <Info infoDining={restaurant} />
            </div>
          </div>
        </section>
      </div>
      {gallery && <Gallery photos={restaurant} />}
      {specialMeal && <TwoCols specialMeal={restaurant} />}
      {testimonial && <Testimonial testimonial={restaurant} />}
      {faqList && <FAQs faq={restaurant} />}
      {recommendationRestaurants && <Recommendation list={recommendationRestaurants} handleMenuClick={handleMenuClick} />}
      {gallery && <Modal photos={restaurant} />}
    </>
  )
}

export default PostBody