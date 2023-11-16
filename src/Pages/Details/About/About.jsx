import React from 'react';
import img1 from "../../../assets/about/banner1.jpg";
import img2 from "../../../assets/about/banner2.jpg";
import img3 from "../../../assets/about/banner3.jpg";
import img4 from "../../../assets/about/banner4.jpg";
import img5 from "../../../assets/about/banner5.jpg";
import img6 from "../../../assets/about/map.png";
import Weather from '../../../Components/Weather/Weather';
import Basicinfo from '../../../Components/Basicinfo/Basicinfo';

function About() {
  return (
    <div className="flex container justify-center mx-auto gap-5 my-28">
     
      <div className="flex flex-col p-4">
        <img src={img1} alt="" className="w-[1100px] mb-7" />
        <div className="flex gap-4">
          <img src={img2} alt="" className="w-[300px] h-[150px] object-cover" />
          <img src={img3} alt="" className="w-[300px] h-[150px] object-cover" />
          <img src={img4} alt="" className="w-[300px] h-[150px] object-cover" />
          <img src={img5} alt="" className="w-[300px] h-[150px] object-cover"/>
        </div>
        <h1 className='text-xl font-bold mt-9'>About UK</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with <br /> <br /> a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <Basicinfo/>
      </div>

   
      <div className="p-4">
        <h1 className='text-2xl font-bold'>City Map</h1>
        <img src={img6} alt="Another Image" className="w-[600px] h-[300px] object-cover" />
        <Weather/>
      </div>
    </div>
  );
}

export default About;
