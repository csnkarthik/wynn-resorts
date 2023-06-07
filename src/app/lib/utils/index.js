import Image from "next/image"

export function formatDate(dateString, options) {
  const { format } = new Intl.DateTimeFormat('en-US', options)
  return format(new Date(dateString))
}

export const $all = (selector) => typeof document !== 'undefined' && document.querySelectorAll(selector);
export const $id = (selector) => typeof document !== 'undefined' && document.getElementById(selector);
export const isDesktop = () => typeof window !== 'undefined' && window.matchMedia("(min-width: 577px)").matches;
export const isViewDesktop = () => typeof window !== 'undefined' && window.matchMedia("(min-width: 992px)").matches;
export const isTablet = () => typeof window !== 'undefined' && window.matchMedia("(max-width: 1024px)").matches;
export const isMobile = () => typeof window !== 'undefined' && window.matchMedia("(max-width: 576px)").matches;
export const _$ = selector => typeof document !== 'undefined' && document.querySelector(selector);

export const sticky = (element, height, className) => window?.pageYOffset > height ? element?.classList.add("sticky", "animated", "fadeInDown") : element?.classList.remove("sticky", "animated", "fadeInDown");

export const handleSticky = () => {
  (isTablet() || isMobile()) && _$("#myHeader").classList.remove('sticky');
  isDesktop() && _$(".mainNav").classList.remove('sticky');
}

export const partySize = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests']
export const timeList = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM']


export const responsive = [
  {
    breakpoint: 1530,
    settings: { slidesToShow: 3, }
  },
  {
    breakpoint: 1024,
    settings: { slidesToShow: 3, }
  },
  {
    breakpoint: 480,
    settings: { slidesToShow: 1, }
  }
]


