import React from "react";
import ImageComp from '../components/Poster/image.component';

import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
const Plays = () => {
return (
<>
<div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12">
      <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
      <div className="flex flex-wrap">
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <ImageComp
               src="https://ik.imagekit.io/2m4k6s8ksev/et00314534-zjzubzamfs-portrait_Omm6rx6WIzX.jpg?updatedAt=1634372831206"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
      </div>
      </div>

       <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
        <PlaysFilter title="Categories" tags={["Theatre"]}/>
        </div>
       </div>
   </div>
</div>
</>
)
};
export default Plays;