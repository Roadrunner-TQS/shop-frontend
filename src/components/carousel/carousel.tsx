interface CarouselProps {}

export const Carousel: React.FunctionComponent<CarouselProps> = (props) => {
  return <div className="carousel h-96 w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://picsum.photos/1920/1080?random=1" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://picsum.photos/1920/1080?random=1" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://picsum.photos/1920/1080?random=1" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://picsum.photos/1920/1080?random=1" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>;
};

