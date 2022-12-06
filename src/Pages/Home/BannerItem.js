import React from 'react';

const BannerItem = ({ slide }) => {
    const { image,id,prev,next } = slide;
    return (
      <div id={`slide1${id}`} className="carousel-item relative w-full">
          <div className='carousel-img'>
             <img src={image} alt='' className="w-full rounded-xl" />
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
            <h1 className='text-6xl font-bold text-white'>Affordable <br />
              price for car <br />
            servicing</h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
            <h1 className='text-xl text-white'> Lllum magni tenetur tempora eos molestiae!  tenetur nulla ea perferendis aliquam qui quia velit cupiditate ullam?</h1>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
            <button className="btn btn-success mr-5">Success</button>
            <button className="btn btn-warning">Warning</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide1${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide1${next}`} className="btn btn-circle">❯</a>
    </div>
    </div>
    );
};

export default BannerItem;