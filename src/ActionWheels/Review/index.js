import React, { useEffect, useState } from 'react';
import { orderBy as _orderBy } from 'lodash';
import { transformData } from '../../utilities/productMapping';
import './styles.scss';

const ReviewPage = () => {
  const [cards, setCards] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const productInformation = transformData("Action Wheels", "products");
    const data = _orderBy(productInformation.data, ['itemPosition'], ['desc']);
    setData(data);
  }, []);

  useEffect(() => {
    setCards(data.map((item, index) => {
      return (
        <div className="reviewImageContainer">
        <a href={item.walmartLink} target="blank">
          <img className="reviewImage" src={item.image} />
          <p className="reviewImageTitle">{item.reviewTitle}</p>
        </a>
        </div>
      )
    }));
  }, [data]);

  return (
    <div>
      <div className="selectProductText">PLEASE SELECT THE PRODUCT TO REVIEW</div>

      <div className="productCards">
        {cards}
      </div>
    </div>
  )
};

export default ReviewPage;