import styles from "./style";
import { Routes, Route } from 'react-router-dom';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Services, Form } from "./components";

const App = () => (
  <div className="bg-neutral-200 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-neutral-200 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> */}
    
    <div className={`bg-neutral-200 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Business />
              <Services />
              <Testimonials />
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/form" element={<Form />} />
          
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
