import { feedback, service } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Services = () => { 
    return (
    <section id="service" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="styles.heading2 text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        Service and Products 
      </h2>
      
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {service.map((card) => <ServiceCard key={card.id} {...card} />)}
    </div>
  </section>
  )
};
export default Services;