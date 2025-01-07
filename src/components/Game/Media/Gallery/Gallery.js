import { useState } from "react";
import { ENV } from "@/utils";
import { FullModal } from "@/components/Shared";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import Slider from "react-slick";
import styles from "./Gallery.module.scss";

export function Gallery(props) {
  const { screenshots } = props;
  const [show, setShow] = useState(false);
  const onOpenClose = () => setShow((prevState) => !prevState);

  const screenshotsClone = [...screenshots];
  const principalImg = screenshotsClone.shift();

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return (
        <Image src={`${ENV.SERVER_HOST}${screenshots[index].attributes.url}`} />
      );
    },
  };

  return (
    <>
      {/* Big IMAGE */}
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image
            src={`${ENV.SERVER_HOST}${principalImg.attributes.url}`}
            onClick={onOpenClose}
          />
        </div>
        {/* IMAGE's Grid */}
        <div className={styles.grid}>
          {map(screenshotsClone, (screenshot) => (
            <div key={screenshot.id}>
              <Image
                src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`}
                onClick={onOpenClose}
              />
            </div>
          ))}
        </div>
      </div>
      {/* MODAL */}
      <FullModal show={show} onOpenClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {map(screenshots, (screenshot) => (
              <div key={screenshot.id}>
                <Image src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`} />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
}
