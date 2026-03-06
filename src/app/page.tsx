"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Quote, Mail, Phone, MapPin, Ship, Package, Search, BarChart3, ShieldCheck, Zap, Globe2, Clock, Heart, Users, Award, CheckCircle2, Menu, X } from "lucide-react";

const carouselItems = [
  {
    title: "REVDIX EXIM LLP",
    subtitle: "Welcome to Excellence",
    desc: "Your premier partner for global trade and seamless logistics solutions.",
    image: "/images/corousel-1.jpg"
  },
  {
    title: "Furniture Export",
    subtitle: "We Are Here To Export",
    desc: "Connecting you with premium manufacturers and suppliers across the world.",
    image: "/images/corousel-2.jpg"
  },
  {
    title: "Jewelry Export",
    subtitle: "We Are Here To Export",
    desc: "Ensuring your cargo reaches its destination safely and on time, every time.",
    image: "/images/corousel-3.jpg"
  },
  {
    title: "Indian Spices Export",
    subtitle: "We Are Here To Export",
    desc: "Rigorous standards and inspections to guarantee the best products for your market.",
    image: "/images/corousel-4.jpg"
  },
  {
    title: "Leather Export",
    subtitle: "We Are Here To Export",
    desc: "Building long-term success through transparent and efficient international trade.",
    image: "/images/corousel-5.jpg"
  }
];

const reviews = [
  {
    name: "John Miller",
    designation: "CEO, Global Tradings",
    text: "Highly professional service. They made our import process completely hassle-free and ensured quality at every step. Their attention to detail is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    designation: "Procurement Manager, East-West Co.",
    text: "Revdix has been our reliable partner for over two years. Their sourcing expertise helped us find the best Indian spices for our international stores.",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    designation: "Director, Luxe Furniture",
    text: "Transparent deals and on-time delivery. We highly recommend Revdix for anyone looking for reliable furniture exports from India.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    designation: "Retail Operations, EuroStyle",
    text: "The quality of leather goods we received was exceptional. Their communication throughout the shipping process was proactive and helpful.",
    rating: 5
  }
];

function ScrollReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={`${className} scroll-reveal ${isVisible ? 'in-view' : ''}`}
    >
      {children}
    </div>
  );
}

function CarouselSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  const getSlideClass = (index: number) => {
    if (index === current) return "active";
    if (index === (current - 1 + carouselItems.length) % carouselItems.length) return "prev";
    return "next";
  };

  return (
    <div className="hero-carousel">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`hero-slide ${getSlideClass(index)}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url("${item.image}")` }}
          />
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <p className="hero-subtitle">{item.subtitle}</p>
            <h1 className="hero-title">{item.title}</h1>
            <p className="hero-desc">{item.desc}</p>
            <div className="hero-btn-group">
              <a href="#services" className="btn-premium btn-primary">Our Services</a>
              <a href="#contact" className="btn-premium btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button onClick={prevSlide} className="carousel-btn prev">❮</button>
      <button onClick={nextSlide} className="carousel-btn next">❯</button>

      {/* Dots */}
      <div className="carousel-dots">
        {carouselItems.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            style={{ width: i === current ? '40px' : '10px' }}
          />
        ))}
      </div>
    </div>
  );
}

function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding testimonial-section">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Testimonials</h4>
          <h2 className="section-title">Client Success Stories</h2>
          <div className="section-divider"></div>
        </div>

        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className={`review-slide ${index === currentReview ? 'active' : ''}`}>
              <div className="testimonial-card">
                <Quote size={50} className="testimonial-quote-icon" />
                <p className="testimonial-quote">"{review.text}"</p>
                <div className="testimonial-stars">
                  {"★".repeat(review.rating)}
                </div>
                <div className="testimonial-author">{review.name}</div>
                <div className="testimonial-designation">{review.designation}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Navigation Dots */}
        <div className="testimonial-dots">
          {reviews.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentReview(i)}
              className={`testimonial-dot ${i === currentReview ? 'active' : ''}`}
              style={{ width: i === currentReview ? '32px' : '10px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-light relative-z1">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Get In Touch</h4>
          <h2 className="section-title">Contact <span className="text-royal">Us Today</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="contact-icon bg-royal">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon bg-royal">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email Address</h3>
                <p>info@revdixexim.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon bg-royal">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>Phone Number</h3>
                <p>+91 000 000 0000</p>
              </div>
            </div>
          </div>

          <form className="contact-form-premium" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group-grid">
              <div className="form-input-wrapper">
                <input type="text" placeholder="Your Name" className="premium-input" required />
              </div>
              <div className="form-input-wrapper">
                <input type="email" placeholder="Your Email" className="premium-input" required />
              </div>
            </div>
            <div className="form-input-wrapper">
              <input type="text" placeholder="Subject" className="premium-input" required />
            </div>
            <div className="form-input-wrapper">
              <textarea placeholder="Your Message" className="premium-textarea" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-premium btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-links">
            <span className="top-bar-item"><Mail size={12} /> info@revdixexim.com</span>
            <span className="top-bar-item"><Phone size={12} /> +91 00000 00000</span>
          </div>
          <div className="top-bar-socials">
            <a href="#" className="top-bar-social-link"><Facebook size={14} /></a>
            <a href="#" className="top-bar-social-link"><Twitter size={14} /></a>
            <a href="#" className="top-bar-social-link"><Linkedin size={14} /></a>
            <a href="#" className="top-bar-social-link"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo-container">
            <Image
              src="/images/revdix logo wo bg .png"
              alt="Revdix Exim Logo"
              width={150}
              height={50}
              className="nav-logo"
              style={{
                filter: scrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
              priority
            />
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`} style={{ color: (scrolled || isMenuOpen) ? 'var(--text-dark)' : '#fff' }}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>What We Do</a></li>
            <li><a href="#export" onClick={() => setIsMenuOpen(false)}>What We Export</a></li>
            <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="header-actions">
            <a href="#contact" className="btn-premium btn-primary hide-mobile">Enquiry Now</a>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <CarouselSection />

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div>
              <h4 className="text-royal about-subtitle">─── About Revdix ───</h4>
              <h2 className="section-title">Expert <span className="text-royal">Import Export</span> Solutions</h2>
              <p className="about-text">
                Revdix Exim LLP is a premier export-import company dedicated to bridging the global market.
                With years of industry expertise, we specialize in delivering high-quality products across
                multiple categories, ensuring excellence and reliability in every transaction.
              </p>
              <p className="about-text">
                Our commitment is to facilitate seamless international trade by adhering to global standards
                and building long-term partnerships with our clients worldwide.
              </p>
              <a href="#about" className="btn-premium btn-primary">Read More</a>
            </div>
            <div className="about-image-wrapper">
              <Image
                src="/images/company_workspace.jpeg"
                alt="Revdix Company Workspace"
                fill
                className="obj-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do (Dark Overlay Section) */}
      <section id="services" className="section-padding services-section">
        <div className="services-overlay"></div>
        <div className="container relative-z1" style={{ color: '#fff' }}>
          <div className="section-header">
            <h2 className="section-title light">What We Do</h2>
            <div className="section-divider light"></div>
          </div>
          <div className="services-grid">
            {[
              { title: "Export", desc: "Global distribution of premium Indian products to international markets.", icon: <Ship size={32} /> },
              { title: "Import", desc: "Sourcing high-quality global goods for domestic consumption.", icon: <Package size={32} /> },
              { title: "Sourcing Agent", desc: "Identifying and vetting the best suppliers for your specific needs.", icon: <Search size={32} /> },
              { title: "Trading & Consultancy", desc: "Expert advice on international trade regulations and logistics.", icon: <BarChart3 size={32} /> }
            ].map((item, i) => (
              <div key={i} className="service-item">
                <div className="bg-royal service-icon-box">
                  {item.icon}
                </div>
                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="export" className="section-padding">
        <div className="container sticky-grid-container">
          {/* Sticky Side Header */}
          <div className="sticky-side-header">
            <h4 className="section-subtitle">Our Collection</h4>
            <h2 className="section-title">What We <span className="text-royal">Export</span></h2>
            <div className="section-divider left"></div>
            <p className="about-text w-300">
              Discover our wide range of premium quality products sourced from the best manufacturers across India,
              meeting global standards for excellence.
            </p>
            <div className="btn-enquire-now">
              <a href="#contact" className="btn-premium btn-primary">Enquire Now</a>
            </div>
          </div>

          {/* Scrolling Grid */}
          <div className="scrolling-grid">
            {[
              "Fruits & Vegetables", "Food Products", "Spices Products",
              "Household Products", "Handicraft Products", "Paper Products",
              "Apparels & Textile", "Furniture", "Metal Products",
              "Ceramic Products", "Construction Materials", "Packaging Products"
            ].map((product, i) => (
              <ScrollReveal key={i}>
                <div className="product-card">
                  <div className="product-image">
                    <Image
                      src={`/images/${product}${product === 'Furniture' ? '.png' : '.jpg'}`}
                      alt={product}
                      fill
                      className="obj-cover"
                    />
                  </div>
                  <div className="product-info">
                    <h3>{product}</h3>
                    <div style={{ borderBottom: '2px solid var(--secondary-color)', width: '40px', margin: '0.5rem auto 1rem auto' }}></div>
                    <a href="#" className="product-link">View Details →</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Gallery */}
      <section id="gallery" className="section-padding gallery-section">
        <div className="gallery-overlay"></div>
        <div className="container relative-z1">
          <div className="section-header">
            <h2 className="section-title light">Business Gallery</h2>
            <div className="section-divider light"></div>
          </div>
          <div className="gallery-grid">
            {[
              "Fruits & Vegetables.jpg", "Spices Products.jpg", "Handicraft Products.jpg",
              "Construction Materials.jpg", "Metal Products.jpg", "Food Products.jpg",
              "Ceramic Products.jpg", "Furniture.png"
            ].map((img, i) => (
              <ScrollReveal key={i}>
                <div className="gallery-item gallery-card">
                  <Image
                    src={`/images/${img}`}
                    alt={`Gallery Image ${i + 1}`}
                    fill
                    className="gallery-image obj-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why You <span className="text-royal">Choose Us</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="why-grid">
            {[
              { title: "Reliability", desc: "Unwavering commitment to timely deliveries and consistent service quality across all global borders.", icon: <ShieldCheck size={40} /> },
              { title: "Expertise", desc: "Years of specialized experience in international trade regulations and logistics management.", icon: <Award size={40} /> },
              { title: "Global Reach", desc: "A vast network of international partners ensuring seamless export-import operations worldwide.", icon: <Globe2 size={40} /> },
              { title: "Quality Control", desc: "Rigorous inspection and quality assurance protocols to ensure only the best products reach our clients.", icon: <CheckCircle2 size={40} /> },
              { title: "On-time Delivery", desc: "Optimized logistics and supply chain management for the fastest possible shipping turnarounds.", icon: <Clock size={40} /> },
              { title: "Customer Focused", desc: "Tailored solutions and dedicated support to meet the unique needs of every business partner.", icon: <Heart size={40} /> }
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="text-royal why-icon-box">{item.icon}</div>
                <h3 className="text-dark">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Review Carousel */}
      <ReviewSection />

      {/* Membership & Certification */}
      {/* <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '4rem', color: 'var(--primary-color)' }}>Membership & <span className="text-royal">Certification</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '120px', height: '80px', opacity: 0.8 }}>
              <Image src="/images/revdix logo.png" alt="Certification 1" fill style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>
            <div style={{ position: 'relative', width: '120px', height: '80px', opacity: 0.8 }}>
              <Image src="/images/revdix_detail_page.jpeg" alt="Certification 2" fill style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>
            <div style={{ position: 'relative', width: '120px', height: '80px', opacity: 0.8 }}>
              <Image src="/images/corousel-4.jpg" alt="Certification 3" fill style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Expanded Footer */}
      <footer id="contact" className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Image
                src="/images/revdix logo wo bg .png"
                alt="Logo"
                width={200}
                height={70}
                className="footer-logo"
                priority
              />
              <p className="footer-desc">
                Your global partner for efficient and reliable import-export services. Connecting businesses beyond borders with excellence and transparency.
              </p>
            </div>
            <div>
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Gallery</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">Our Services</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Import Services</a></li>
                <li><a href="#" className="footer-link">Export Solutions</a></li>
                <li><a href="#" className="footer-link">Global Sourcing</a></li>
                <li><a href="#" className="footer-link">Trade Consultancy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">Contact Info</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item"><MapPin size={18} className="text-secondary" /> Surat, Gujarat, India</li>
                <li className="footer-contact-item"><Phone size={18} className="text-secondary" /> +91 000 000 0000</li>
                <li className="footer-contact-item"><Mail size={18} className="text-secondary" /> info@revdixexim.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Revdix Exim LLP. All Rights Reserved. Designed with Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
}
