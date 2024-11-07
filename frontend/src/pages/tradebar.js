import React from 'react';

const tradeData = [
  { price: 'Watch', from: 'SONATA', imgSrc: '/assets/gadgets/3 (1).jpg' },
  { price: 'Hear Phones', from: 'ONEPUSE', imgSrc: '/assets/gadgets/1 (3).png' },
  { price: 'Watch', from: 'FOSSIL', imgSrc: '/assets/gadgets/3 (3).jpg' },
  { price: 'Watch', from: 'CASIO', imgSrc: '/assets/gadgets/3 (1).jpg' },
  { price: 'Mobile Phones', from: 'GOOGLE', imgSrc: '/assets/gadgets/2 (2).jpg' },
  { price: 'Camera', from: 'BREITLING', imgSrc: '/assets/gadgets/1 (4).png' },
  { price: 'Speakers', from: 'JBL', imgSrc: '/assets/gadgets/5.jpg' },
  { price: 'Tv', from: 'SONY', imgSrc: '/assets/gadgets/4.jpg' },
  { price: 'Tablet', from: 'XIAOMI', imgSrc: '/assets/gadgets/2 (1).png' },
  { price: 'Laptop', from: 'LENOVA', imgSrc: '/assets/gadgets/1 (2).png' },
  { price: 'Camera', from: 'CITIZEN', imgSrc: '/assets/gadgets/1 (1).png' },
  { price: 'Mobile Phones', from: 'APPLE', imgSrc: '/assets/gadgets/2 (2).jpg' },
  { price: 'SmartWatch', from: 'REALME', imgSrc: '/assets/gadgets/3 (3).jpg' },
  { price: 'Camers', from: 'CANON', imgSrc: '/assets/gadgets/1 (1).png' },
  { price: 'Tv', from: 'PANASONIC', imgSrc: '/assets/gadgets/4.jpg' },
  { price: 'Laptop', from: 'ASUS', imgSrc: '/assets/gadgets/1 (2).png' },
  { price: 'Camera', from: 'KODAK', imgSrc: '/assets/gadgets/1 (1).png' },
  { price: 'Tablet', from: 'APPLE', imgSrc: '/assets/gadgets/2 (1).png' },
  { price: 'Camera', from: 'NIKON', imgSrc: '/assets/gadgets/1 (4).png' },
];

const Tradebar = () => {
  const doubledTradeData = [...tradeData, ...tradeData]; // Duplicate the trade data

  return (
    <div className='tradebar_content'>
      <p>Exclusive Brands</p>
      <div className='tradebar_scroll-wrapper'>
        {doubledTradeData.map((trade, index) => (
          <div className='tradebar_scroll' key={index}>
            <img src={trade.imgSrc} alt="img" />
            <div className='tradebar_item'>
              <span className='tradebar_price'>{trade.price}</span>
              <span className='tradebar_from'>{trade.from}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tradebar;
