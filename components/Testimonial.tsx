import React, { useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: number, next: number) => {
      setDotActive(next);
    },
    appendDots: (dots: React.ReactNode[]) => ( // Specify dots as React.ReactNode[]
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <ul
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Adjusted for centering dots horizontally
            gap: '10px',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          cursor: 'pointer',
          border: `1px solid ${i === dotActive ? '#F7D449' : '#aeaeae'}`,
          backgroundColor: i === dotActive ? '#F7D449' : 'transparent', // Added background color for active dot
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="text-white bg-[#0F1113] py-20 flex justify-center items-center"
    >
      <div className="w-full px-4 md:max-w-4xl"> {/* Responsive width */}
        <Slider {...settings}>
          <div className="px-2"> {/* Adjust spacing inside slider */}
            <p className="text-xl text-textColor text-center leading-8">
              <span className="text-white">Apple company CEO -</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus sed asperiores commodi earum consectetur dolorem, eligendi animi minus. Reprehenderit laboriosam ipsa quia dignissimos voluptatum aliquid et repudiandae laborum impedit perferendis quis, sapiente doloribus eaque maxime nemo facere? At, facilis!
            </p>
          </div>
          <div className="px-2"> {/* Adjust spacing inside slider */}
            <p className="text-xl text-textColor text-center leading-8">
              <span className="text-white">Google company CTO -</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus sed asperiores commodi earum consectetur dolorem, eligendi animi minus. Reprehenderit laboriosam ipsa quia dignissimos voluptatum aliquid et repudiandae laborum impedit perferendis quis, sapiente doloribus eaque maxime nemo facere? At, facilis!
            </p>
          </div>
          <div className="px-2"> {/* Adjust spacing inside slider */}
            <p className="text-xl text-textColor text-center leading-8">
              <span className="text-white">Amazon company CEO -</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus sed asperiores commodi earum consectetur dolorem, eligendi animi minus. Reprehenderit laboriosam ipsa quia dignissimos voluptatum aliquid et repudiandae laborum impedit perferendis quis, sapiente doloribus eaque maxime nemo facere? At, facilis!
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
