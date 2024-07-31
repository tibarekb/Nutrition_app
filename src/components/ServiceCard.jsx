import { conversation } from "../assets";

const ServiceCard = ({content, img, name}) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-white-gradient">
      <img src={img} alt={name} className="w-[150px] h-[150px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
        {content}
      </p>    
  </div>
  );


export default ServiceCard;