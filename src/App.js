import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCertificate, FaTwitter, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp, FaStar, FaStarHalfAlt, FaQuoteRight, FaHandPointRight, FaUniversity, FaRegSmile, FaChevronRight } from "react-icons/fa";
import { BsCheck2All, BsClipboardData, BsGem, BsInboxes, BsMap, BsEnvelope, BsTelephone, BsShare, BsGeoAlt, BsClock, BsJournalRichtext, BsAward } from "react-icons/bs";

import { RiStoreLine, RiBarChartBoxLine, RiCalendarLine, RiPaintBrushLine, RiDatabase2Line, RiCheckDoubleLine, RiDribbbleFill } from "react-icons/ri";
import { BiReceipt, BiCube, BiImages, BiShield, BiFile, BiTachometer, BiWorld, BiSlideshow, BiArch, BiPlus, BiLink, BiChevronRight, BiSolidChevronRight, BiChevronDown, BiSolidHandRight } from "react-icons/bi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FiSmartphone, FiChevronRight } from "react-icons/fi";
import { AiFillSkype } from "react-icons/ai";
import { PiCopyrightFill } from "react-icons/pi";
import './cs/page.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Swiper from 'swiper';
import 'swiper/css';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 6,
  swipeToSlide: true,
  dots: true,
  speed: 100,
  autoplay: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
};
const settings1 = {
  dots: true,
  infinite: true,
  speed: 30,
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  slidesToScroll: 1
};

function App() {
  return (

    <>

      <div className='fixed-top header header-scrolled'>
        <div className='container d-flex align-items-center justify-content-lg-between' >
          <h1 className='logo me-auto me-lg-0'>
            <a href="">Gp<span>.</span></a>
          </h1>
          <div className='navbar order-last order-lg-0'>
            <ul>
              <li><a href="" className='nav-link scrollto active'>Home</a></li>
              <li><a href="" className='nav-link scrollto'>About</a></li>
              <li><a href="" className='nav-link scrollto'>Services</a></li>
              <li><a href="" className='nav-link scrollto'>Portfolio</a></li>
              <li><a href="" className='nav-link scrollto'>Team</a></li>
              <li className='dropdown'><a href="" className='nav-link scrollto '>Drop Down<BiChevronDown className='drop' /></a>
                <ul>

                  <li><a href="">Drop Down 1</a></li>
                  <li className='dropdown'><a href="">Drop Down 1 <FiChevronRight /></a>
                    <ul>
                      <li><a href="">Deep Drop Down 1</a></li>
                      <li><a href="">Deep Drop Down 2</a></li>
                      <li><a href="">Deep Drop Down 3</a></li>
                      <li><a href="">Deep Drop Down 4</a></li>
                      <li><a href="">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="">Drop Down 1</a></li>
                  <li><a href="">Drop Down 1</a></li>
                  <li><a href="">Drop Down 1</a></li>
                </ul>
              </li>
              <li><a href="" className='nav-link scrollto'>Contact</a></li>
            </ul>
          </div>
          <a href="" className='get-started-btn scrollto'>Get Started</a>
        </div>
      </div>


      <div id='hero' className=' d-flex align-items-center justify-content-center bk-img small_pt'>
        <div className='container aos-init aos-animate' data-aos="fade-right">
          <div className='row justify-content-center aos-init aos-animate'>
            <div className='col-xl-6 col-lg-8'>
              <h1>Powerful Digital Solutions With Gp<span>.</span></h1>
              <h2>We are team of talented digital marketers</h2>
            </div>
          </div>
          <div className='row gy-4 mt-5 justify-content-center aos-init aos-animate'>
            <div className='col-xl-2 col-md-4'>
              <div className='icon-box'>
                <RiStoreLine className='icon-1' />
                <h3><a href="">Lorem Ipsum</a></h3>
              </div>
            </div>
            <div className='col-xl-2 col-md-4'>
              <div className='icon-box'>
                <RiBarChartBoxLine className='icon-1' />
                <h3><a href="">Dolor Sitema</a></h3>
              </div>
            </div>
            <div className='col-xl-2 col-md-4'>
              <div className='icon-box'>
                <RiCalendarLine className='icon-1' />
                <h3><a href="">Sedare Perspiciatis</a></h3>
              </div>
            </div>
            <div className='col-xl-2 col-md-4'>
              <div className='icon-box'>
                <RiPaintBrushLine className='icon-1' />
                <h3><a href="">Magni Dolores</a></h3>
              </div>
            </div>
            <div className='col-xl-2 col-md-4'>
              <div className='icon-box'>
                <RiDatabase2Line className='icon-1' />
                <h3><a href="">Nemos Enimade</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='main'>
        <div className='small_pt about'>
          <div className='container aos-init aos-animate'>
            <div className='row'>
              <div className='col-lg-6 order-1 order-lg-2 aos-init aos-animate'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/about.jpg" className='img-fluid' alt="" />
              </div>
              <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate'>
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.</p>
                <ul>
                  <li><RiCheckDoubleLine className='icon-2' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><RiCheckDoubleLine className='icon-2' /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><RiCheckDoubleLine className='icon-2' />  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p className='m-0'>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container small_pt features'>
        <Slider {...settings}>



          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-3.png" className='img-fluid' alt="" />
          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-4.png" className='img-fluid' alt="" />
          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-5.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-6.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-7.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-8.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-8.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-8.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-8.png" className='img-fluid' alt="" />

          </div>
          <div className='swip-img'>
            <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-8.png" className='img-fluid' alt="" />

          </div>


        </Slider>
      </div>


      {/* <div className='clients small_pt'>
        <div className='container aos-init aos-animate'>
          <div className='swip'>
            <div className='swiper-wrapper align-items-center'>
              <div className='swip-img'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-3.png" className='img-fluid' alt="" />
              </div>
              <div className='swip-img'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-4.png" className='img-fluid' alt="" />
              </div>
              <div className='swip-img'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-5.png" className='img-fluid' alt="" />
              </div>
              <div className='swip-img'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-6.png" className='img-fluid' alt="" />
              </div>
              <div className='swip-img'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-7.png" className='img-fluid' alt="" />
              </div>
              <div className='swip-img'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-8.png" className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}




      <div className='small_pt features'>
        <div className='container aos-init aos-animate'>
          <div className='row'>
            <div className='image col-lg-6 aos-init aos-animate'></div>
            <div className='col-lg-6 aos-init aos-animate'>
              <div className='icon-box mt-5 mt-lg-0 aos-init aos-animate'>
                <BiReceipt className='icon-3' />
                <h4>Est labore ad</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className='icon-box mt-5 aos-init aos-animate'>
                <BiCube className='icon-3' />
                <h4>Harum esse qui</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
              <div className='icon-box mt-5 aos-init aos-animate'>
                <BiImages className='icon-3' />
                <h4>Aut occaecati</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
              <div className='icon-box mt-5 aos-init aos-animate'>
                <BiShield className='icon-3' />
                <h4>Beatae veritatis</h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='small_pt services'>
        <div className='container aos-init aos-animate'>
          <div className='section-title'>
            <h2>Services</h2>
            <p>Check our Services</p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate'>
              <div className='icon-box'>
                <div className='icon'><RiDribbbleFill className='icon-4' /></div>
                <h4><a href="">Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate'>
              <div className='icon-box'>
                <div className='icon'><BiFile className='icon-4' /></div>
                <h4><a href="">Sed ut perspiciatis</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate'>
              <div className='icon-box'>
                <div className='icon'><BiTachometer className='icon-4' /></div>
                <h4><a href="">Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate'>
              <div className='icon-box'>
                <div className='icon'><BiWorld className='icon-4' /></div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate'>
              <div className='icon-box'>
                <div className='icon'><BiSlideshow className='icon-4' /></div>
                <h4><a href="">Dele cardo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate'>
              <div className='icon-box'>
                <div className='icon'><BiArch className='icon-4' /></div>
                <h4><a href="">Divera don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='cta small_pt'>
        <div className='container aos-init aos-animate'>
          <div className='text-center'>
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="" className='cta-btn'>Call To Action</a>
          </div>
        </div>
      </div>



      <div className='small_pt'>
        <div className='container aos-init aos-animate'>
          <div className='section-title'>
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>
          <div className='row aos-init aos-animate'>
            <div className='col-lg-12 d-flex justify-content-center'>
              <ul className='portfolio-flters'>
                <li data-filter='*' className='filter-active'>All</li>
                <li data-filter='.filter-app'>App</li>
                <li data-filter='.filter-card'>Card</li>
                <li data-filter='.filter-web'>Web</li>
              </ul>
            </div>
          </div>
          <div className='row portfolio-container aos-init aos-animate'>
            <div className='col-lg-4 col-md-6 portfolio-item oth filter-app'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-1'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-2'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-3'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-4.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-4'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-5'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>App 3</h4>
                  <p>App</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-6'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-7.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-7'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-8.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-app oth-8'>
              <div className='portfolio-wrap'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg" className='img-fluid' alt="" />
                <div className='portfolio-info'>
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className='portfolio-links'>
                    <a href=""><BiPlus /></a>
                    <a href=""><BiLink /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='small_pt counts'>
        <div className='container aos-init aos-animate'>
          <div className='row no-gutters'>
            <div className='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate'></div>
            <div className='col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch aos-init aos-animate'>
              <div className='content d-flex flex-column justify-content-center'>
                <h3>Voluptatem dignissimos provident quasi</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                <div className='row'>
                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <FaRegSmile className='icon-5' /><span>65</span>
                      <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                    </div>
                  </div>
                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <BsJournalRichtext className='icon-5' /><span>85</span>
                      <p><strong>Projects</strong>  adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                    </div>
                  </div>
                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <BsClock className='icon-5' /><span>35</span>
                      <p><strong>Years of experience</strong>  aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                    </div>
                  </div>
                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <BsAward className='icon-5' /><span>20</span>
                      <p><strong>Awards</strong>  rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='testimonials small_pt'>
        <div className='container aos-init aos-animate'>
          <Slider {...settings1}>
            <div>
              
              <div className='testimonials-slider'>
                <div className='swiper-slide swiper-slide-duplicate'>
                  <div className='testimonial-item'>
                    <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-1.jpg" className='testimonial-img' alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo & Founder</h4>
                    <p>
                      <ImQuotesLeft className='quote-1' />Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<ImQuotesRight className='quote-2' />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='testimonials-slider'>
                <div className='swiper-slide swiper-slide-duplicate'>
                  <div className='testimonial-item'>
                    <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-4.jpg" className='testimonial-img' alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <ImQuotesLeft className='quote-1' />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <ImQuotesRight className='quote-2' />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='testimonials-slider'>
                <div className='swiper-slide swiper-slide-duplicate'>
                  <div className='testimonial-item'>
                    <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-5.jpg" className='testimonial-img' alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <ImQuotesLeft className='quote-1' />
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <ImQuotesRight className='quote-2' />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='testimonials-slider'>
                <div className='swiper-slide swiper-slide-duplicate'>
                  <div className='testimonial-item'>
                    <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-2.jpg" className='testimonial-img' alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <ImQuotesLeft className='quote-1' />
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <ImQuotesRight className='quote-2' />
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Slider>
        </div>
      </div>



      {/* <div className='testimonials small_pt'>
        <div className='container aos-init aos-animate'>
          <div className='testimonials-slider'>
            <div className='swiper-slide swiper-slide-duplicate'>
              <div className='testimonial-item'>
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-1.jpg" className='testimonial-img' alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                <p>
                  <ImQuotesLeft className='quote-1' />Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<ImQuotesRight className='quote-2' />
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      <div className='small_pt team'>
        <div className='container aos-init aos-animate'>
          <div className='section-title'>
            <h2>Team</h2>
            <p>Check our Team</p>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member aos-init aos-animate'>
                <div className='member-img'>
                  <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-1.jpg" className='img-fluid' alt="" />
                  <div className='social'>
                    <a href=""><FaTwitter className='icon-6' /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member aos-init aos-animate'>
                <div className='member-img'>
                  <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-2.jpg" className='img-fluid' alt="" />
                  <div className='social'>
                    <a href=""><FaTwitter className='icon-6' /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member aos-init aos-animate'>
                <div className='member-img'>
                  <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-3.jpg" className='img-fluid' alt="" />
                  <div className='social'>
                    <a href=""><FaTwitter className='icon-6' /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member aos-init aos-animate'>
                <div className='member-img'>
                  <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg" className='img-fluid' alt="" />
                  <div className='social'>
                    <a href=""><FaTwitter className='icon-6' /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /> </a>
                    <a href=""><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='small_pt contact'>
        <div className='container aos-init aos-animate'>
          <div className='section-title'>
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" className='map-2' frameborder="0"></iframe>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='info'>
                <div className='address'>
                  <div className='map-icon'><BsGeoAlt /></div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className='email'>
                  <div className='map-icon'><BsEnvelope /></div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
                <div className='phone'>
                  <div className='map-icon'><FiSmartphone /></div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8 mt-5 mt-lg-0'>
              <form action="" className='php-email-form'>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input type="text" placeholder='Your Name' required className='form-control' />
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input type="email" className='form-control' name="email" id="email" placeholder='Your Email' required />
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <input type="text" name="Subject" id="Subject" placeholder='Subject' className='form-control' required />
                </div>
                <div className='form-group mt-3'>
                  <textarea name="Message" className='form-control' id="Message" placeholder='Message' rows="5" required></textarea>
                </div>
                <div className='my-3'></div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



      <div id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='footer-info'>
                  <h3>Gp<span>.</span></h3>
                  <p>A108 Adam Street <br />
                    NY 535022, USA <br /> <br /> <strong>Phone:</strong> +1 5589 55488 55 <br /> <strong>Email:</strong>info@example.com <br /></p>
                  <div className='social-links mt-3'>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /> </a>
                    <a href=""><AiFillSkype /></a>
                    <a href=""><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 footer-links'>
                <h4>Useful Links</h4>
                <ul>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Home</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">About us</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Services</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Terms of service</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Privacy policy</a></li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-6 footer-links'>
                <h4>Our Services</h4>
                <ul>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Web Design</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Web Development</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Product Management</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Marketing</a></li>
                  <li><BiSolidHandRight className='ic-right' /><a href="">Graphic Design</a></li>
                </ul>
              </div>
              <div className='col-lg-4 col-md-6 footer-newsletter'>
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method='post'>
                  <input type="email" />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='copyright'>
            <PiCopyrightFill /> Copyright <strong><span>Gp</span></strong>. All Rights Reserved
          </div>
          <div className='credits'>
            Designed by <a href="">BootstrapMade</a></div>
        </div>
      </div>




      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </>



  );
}


export default App;