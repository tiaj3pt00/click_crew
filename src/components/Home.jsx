import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import sonyImage from "../assets/images/sony.jpg";
import watch from "../assets/images/watch.jpg";
import earbuds from "../assets/images/earbuds.jpg";
import delivery from "../assets/images/deli.avif";
import mobile from "../assets/images/mob.webp";
import cars from "../assets/images/cars.jpg";
import service from "../assets/images/service.jpg";
import about from "../assets/images/about.jpg";

const Home = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1 className="text-success">CLICK-CREW</h1>
        <p>Best Deals and Reviews on Products You Love!</p>
      </header>

      {/* Carousel Section with Text */}
      <section className="carousel-section mb-5">
        <div
          id="productCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src={delivery}
                className="d-block w-100"
                alt="Fast Delivery"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="bg-success">Fast Delivery</h3>
                <p className="text-info">Get Delivered In No Time</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img src={mobile} className="d-block w-100" alt="Summer Sale" />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="bg-success">Summer Sale</h3>
                <p className="text-info">Up to 50% off on selected items</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img src={cars} className="d-block w-100" alt="New Arrivals" />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="bg-success">New Arrivals</h3>
                <p className="text-info">
                  Be the first to get the hottest products of the season
                </p>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <img
                src={service}
                className="d-block w-100"
                alt="Customer Service"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="bg-success">Customer Service</h3>
                <p className="text-info">
                  Top-rated products loved by our community
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Rest of your component remains the same */}
      {/* About Us Section */}
      <section className="about-section mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={about}
              alt="About Click-Crew"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-success">About Click-Crew</h2>
            <p>
              Click-Crew is your premier affiliate marketing platform dedicated
              to bringing you the best deals, honest reviews, and exclusive
              discounts on products you'll love. We partner with top brands to
              offer you quality products at competitive prices.
            </p>
            <p>
              Our team of experts thoroughly tests and reviews each product to
              ensure we only recommend items that meet our high standards.
              Whether you're looking for electronics, home goods, or lifestyle
              products, Click-Crew is your trusted shopping companion.
            </p>
            <p>
              Join our growing community of savvy shoppers and start enjoying
              the benefits of smart, informed purchasing decisions today!
            </p>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="text-success">Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src={sonyImage} alt="Sony Headphones" />
            <h3>Sony HeadPhones</h3>
            <p>
              Industry-leading noise cancellation with 30-hour battery life.
            </p>
          </div>
          <div className="product-card">
            <img src={watch} alt="Smart Watch" />
            <h3>Smart Watch Pro</h3>
            <p>Fitness tracking with SpO2 monitoring and GPS.</p>
          </div>
          <div className="product-card">
            <img src={earbuds} alt="Wireless Earbuds" />
            <h3>Wireless Earbuds</h3>
            <p>True wireless with active noise cancellation.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="text-success">Customer Testimonials</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"The Sony headphones exceeded all my expectations!"</p>
            <p>- Sarah J.</p>
          </div>
          <div className="testimonial-card">
            <p>"Fast delivery and excellent customer service."</p>
            <p>- Michael T.</p>
          </div>
        </div>
      </section>

      <footer className="footer bg-success">
        <p>&copy; 2025 CLICK-CREW. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
