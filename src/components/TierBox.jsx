import React, { useState } from 'react';

const TierBox = ({
  img,
  main_heading,
  et,
  voting,
  list,
  tier_heading,
  tierpara,
  etheading,
  totalSupply,
  maxSupply,
  price,
  mint,
  isDisabled,
}) => {
  const [count, setCount] = useState(1);

  const totalPrice = (count * 10 * price * 10) / 100;

  return (
    <div className='section_area'>
      <div className='box'>
        <h1>{tier_heading}</h1>
        <p>{tierpara}</p>
      </div>
      <div className='right_area'>
        <h1>{main_heading}</h1>
        <div className='grid_area'>
          <div className='left_side'>
            <div className='inner_box'>
              <h1>{etheading}</h1>
              <p>{et}</p>
            </div>
            <div className='inner_box'>
              <h1>VOTING</h1>
              <p>{voting}</p>
            </div>
            <div className='inner_box'>
              <h1>utility</h1>
              <ul>
                {list.map((EachLi) => (
                  <li>{EachLi}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='right_side'>
            <img src={img} alt='' />
            <p className='minted'>
              {totalSupply}/{maxSupply} Minted
            </p>
            <div className='calc_arae'>
              <p
                onClick={(e) =>
                  setCount((count) => (count > 1 ? count - 1 : 1))
                }
              >
                -
              </p>
              <div>{count}</div>
              <p
                onClick={(e) =>
                  setCount((count) => (count < 5 ? count + 1 : 5))
                }
              >
                +
              </p>
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              {totalPrice} ETH
            </div>
            <div className='button_wrapper'>
              <button
                disabled={isDisabled}
                onClick={() => mint(count)}
                style={
                  isDisabled
                    ? {
                        filter: 'grayscale(1)',
                      }
                    : {}
                }
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierBox;
