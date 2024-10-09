import React from 'react';
import './Home.css';




const Card = ({ heading, image, text, quote, isReversed }) => (
  <div className={`card ${isReversed ? 'card-reversed' : ''}`}>
    <div className="card-image">
      <h2>{heading}</h2>
      <img src={image} alt={heading} />
    </div>
    <div className="card-text">
      <p className="quote">{quote}</p>
      <p>{text}</p>
      <button className="shop-button">Shop Now</button>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Paws Veda </h1>
      </header>
      <main>
        <Card
          heading="Dogs"
          image="/images/dogg.png"
          quote="Your loyal companion."
          text="Dogs are loyal companions, offering boundless love and joy. Caring for a dog involves regular exercise, a balanced diet, and routine veterinary check-ups. Provide a comfortable living space with cozy bedding and stimulating toys. Positive reinforcement training helps build a strong bond and ensures good behavior. Socialize your dog with other pets and people to foster friendliness and confidence. Regular grooming and hygiene care are essential for their health. Above all, shower your dog with affection and attention, as they thrive on human interaction and companionship. Your love and care create a happy, healthy, and devoted furry friend."
        />
        <Card
          heading="Cats"
          image="/images/catsss-removebg-preview.png"
          quote="Your independent friend."
          text="Cats are independent yet affectionate creatures that bring warmth to any home. To care for your cat, ensure they have a nutritious diet and fresh water daily. Provide a clean litter box and regular veterinary visits to keep them healthy. Cats love to explore, so a stimulating environment with scratching posts and toys is vital. Regular grooming, especially for long-haired breeds, keeps their coat in top condition. Show your cat love through gentle petting and playtime, respecting their need for space and independence. A well-cared-for cat will reward you with purrs, cuddles, and lifelong companionship."
          isReversed
        />
        <Card
          heading="Birds"
          image="/images/parrots-copy-0.png"
          quote="Your vibrant songbird."
          text="Birds are vibrant and intelligent pets that brighten any home with their songs and colors. Proper bird care includes a spacious cage, fresh water, and a diet rich in seeds, fruits, and vegetables. Regular cage cleaning and veterinary visits ensure their health. Birds need mental stimulation, so provide toys and interactive play to prevent boredom. Social interaction is crucial; spend time talking and engaging with your bird daily. Gentle handling and gradual socialization foster trust and bonding. A well-loved bird will thrive, delighting you with its playful antics and affectionate chirps, creating a joyful and lively atmosphere."
        />
        <Card
          heading="Rabbits and Rodents"
          image="/images/image (2).png"
          quote="Your gentle, sociable pet."
          text="Rabbits are gentle, sociable pets that require love and careful attention. Provide a spacious and secure habitat with clean bedding and fresh water. A balanced diet of hay, fresh vegetables, and rabbit pellets keeps them healthy. Regular grooming, especially for long-haired breeds, prevents matting. Rabbits enjoy social interaction, so spend time playing and cuddling with them daily. They need exercise, so allow supervised time outside their enclosure. Regular veterinary check-ups are essential to monitor their health. By offering a safe environment and plenty of love, your rabbit will be a happy, affectionate companion."
          isReversed
        />
        <Card
          heading="Fishes"
          image="/images/All_fish_2_remove.png"
          quote="Your peaceful aquatic friend."
          text="Fish are tranquil pets that bring a touch of nature's beauty into your home. Proper fish care starts with a well-maintained aquarium, equipped with a filter, heater, and appropriate lighting. Regular water changes and monitoring of water quality ensure a healthy environment. Provide a balanced diet specific to your fish species and avoid overfeeding. Decorate the tank with plants and hiding spots to create a stimulating habitat. Observe your fish daily for signs of illness and consult a vet if needed. With attentive care and a serene environment, your fish will thrive, offering peace and a mesmerizing display of aquatic life."
        />

 <div className="container">
      <img src='/images/offer2.png'alt="Special Offer" className="image" />
      <div className="text-container">
        <h1 className="header5">
          Special
          <br />
          </h1>
         <h2 className='header7'>
         OFFER SALE
          </h2> 
        <h3 className="sub-header5">
          Get upto 25% Discount when you buy more than 2 products
        </h3>
        <button className="button">Get access</button>
      </div>
    </div>  








       
        {/* New Section */}
        <section className="service-section">
          <div className="service-content">
            <div className="service-image-container">
              <img src="/images/service_main.jpg" alt="Main Service" className="main-service-image" />
              <img src="/images/service_sec.jpg" alt="Top Right" className="small-image-top-right" />
              <img src="/images/service_sec.jpg" alt="Bottom Left" className="small-image-bottom-left" />
            </div>
            <div className="service-text">
              <h1>Ready to experience our unparalleled services of pet care?</h1>
              <p>Our comprehensive pet care services are designed to provide your pets with the utmost care and attention. From regular health check-ups to grooming and training, we ensure that your furry friends are happy and healthy. Our team of experienced professionals is dedicated to offering personalized care tailored to the needs of each pet. Sign up today to discover how we can help you provide the best care for your beloved pets.</p>
              <button className="signup-button">Sign Up Now</button>
            </div>
          </div>
        </section>




    
        {/* <div className="last-content">
            <img src="/images/last_second.jpg" alt="Sale" className="last-second" />
        </div> */}




         {/* Customer Section */}
         <section className="customer-section">
          <h1 className="customer-heading">Our Happy Customers</h1>
          <img src="/images/service_sec.jpg" alt="Logo" className="customer-logo" />
          <div className="customer-cards">
            <div className="customer-card"><img src="/images/Bottom_1.jpg" alt="Customer 1" /></div>
            <div className="customer-card"><img src="/images/Bottom_2.jpg" alt="Customer 2" /></div>
            <div className="customer-card"><img src="/images/bottom_3.jpg" alt="Customer 3" /></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
