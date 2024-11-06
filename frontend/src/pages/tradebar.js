import React from 'react';

const tradeData = [
  { price: '50% Off', from: 'SONATA', imgSrc: '/assets/trading/aave.svg' },
  { price: '20% Off', from: 'ONEPUSE', imgSrc: '/assets/trading/doge.svg' },
  { price: '30% Off', from: 'REALME', imgSrc: '/assets/trading/hbar.svg' },
  { price: '$0.3456', from: 'APPLE', imgSrc: '/assets/trading/luna.svg' },
  { price: '$5.795', from: 'FOSSIL', imgSrc: '/assets/trading/atom.svg' },
  { price: '$6.175', from: 'SONY', imgSrc: '/assets/trading/btc.svg' },
  { price: '$1.425', from: 'SAMSUNG', imgSrc: '/assets/trading/eth.svg' },
  { price: '$0.056', from: 'CASIO', imgSrc: '/assets/trading/ksm.svg' },
  { price: '$61.67', from: 'JBL', imgSrc: '/assets/trading/shiba.svg' },
  { price: '$8.56', from: 'GOOGLE', imgSrc: '/assets/trading/uni.svg' },
  { price: '$0.567', from: 'BREITLING', imgSrc: '/assets/trading/ada.svg' },
  { price: '$6.658', from: 'CITIZEN', imgSrc: '/assets/trading/avax.svg' },
  { price: '$6.658', from: 'CANON', imgSrc: '/assets/trading/avax.svg' },
  { price: '50% off', from: 'PANASONIC', imgSrc: '/assets/trading/avax.svg' },
  { price: '30% off', from: 'KODAK', imgSrc: '/assets/trading/avax.svg' },
  { price: '40% off', from: 'NIKON', imgSrc: '/assets/trading/avax.svg' },
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
