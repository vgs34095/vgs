import { Carousel } from "react-responsive-carousel";

export default function HomeSlider({ data }) {
  if (!data) {
    return null;
  }

  return (
    <Carousel>
      {data.map((item, idx) => {
        const { imgUrl } = item;
        return (
          <div key={idx}>
            <img src={imgUrl} />
          </div>
        );
      })}
    </Carousel>
  );
}
