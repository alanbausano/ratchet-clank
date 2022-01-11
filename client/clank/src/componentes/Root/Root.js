import React from "react";
import { Breakpoint } from "react-socks";
import Carrito from "../Carrito/Carrito";
import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";
import Main from "../Home/Main";
import MainMobile from "../Home/MainMobile";
import NavbarDesk from "../Navbar/NavbarDesk";
import NavbarMobile from "../Navbar/NavbarMobile";
import Newsletter from "../Newsletter/Newsletter";
import NewsletterMobile from "../Newsletter/NewsletterMobile";
import Productos from "../Productos/Productos";
import ProductosMobile from "../Productos/ProductosMobile";
import Reviews from "../Reviews/Reviews";
import ReviewsMobile from "../Reviews/ReviewsMobile";
import Tweets from "../Reviews/Tweets";
import TweetsMobile from "../Reviews/TweetsMobile";
import BackToTop from "../BackToTop/BackToTop"
import CarritoMobile from "../Carrito/CarritoMobile";
export default function Root() {
  return (
    <>
      <Breakpoint small down>
        <NavbarMobile />
        <MainMobile />
        <ProductosMobile />
        <ReviewsMobile />
        <TweetsMobile />
        <NewsletterMobile />
        <CarritoMobile />
        <FooterMobile />
      </Breakpoint>
      <Breakpoint medium up>
        <NavbarDesk />
        <Main />
        <Productos />
        <Reviews />
        <Tweets />
        <Newsletter />
        <Carrito />
        <BackToTop />
        <Footer />
      </Breakpoint>
    </>
  );
}
