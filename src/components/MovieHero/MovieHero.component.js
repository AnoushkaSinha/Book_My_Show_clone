import React from "react";
import Cast from "./Cast.component";
import { BiChevronRight, BiShareAlt } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block" style={{height: "40rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>

<div className="absolute z-30 w-64 h-96 left-64 top-10">
<img
src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="poster"
className="h-full w-full rounded-xl"
/>
</div>

   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
     className="w-full h-full"
    />
   </div>
   <div >
            <h1 className='text-xl font-bold py-5 mt-8 '>Cast</h1>
            <div className='flex'>
              <Cast
                name='Simu Liu'
                castName='as Shang chi'
                src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F05%2F13%2FSimu-Liu-1.jpg'
              />
              
              
              <Cast
                name='Michelle yeoh'
                castName='as Jiang Nan'
                src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg'
              />
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold py-5 mt-8 '>Crew</h1>
            <div className='flex'>
              <Cast
                name='Destin Cretton'
                castName='Director'
                src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg'
              />
              
              <Cast
                name='Jonathan'
                castName='Producer'
                src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg'
              />
             
            </div>
          </div>
       
      
   
    </>
    
  )
};

export default MovieHero;