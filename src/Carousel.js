import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";

const MyCarousal = () => {
  return (
    <Carousel className="home__image" controls={false} indicators pause={false}>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/ACQ/HDUpgrade_02152021/Gateway/DV2/US-EN_012721_HDUpgradeRefreshQ1_ACQ_GW_Hero_D_3000x1200_CV18c._CB659587170_.jpg"
          alt=""
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/TMYS_S1_02478_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD6512._CB661005760_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTY0ZDZiOWMt/YTY0ZDZiOWMt-NzdiZjY1N2Mt-w1500._CB660844434_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-OTliYmQ3NDAt-w3000._CB658876925_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/C2A2_2021_GWBleedingHero_3000x1200_DATE_Final_en-US_HO_Generic_EN_NoBurst._CB660481876_.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default MyCarousal;
