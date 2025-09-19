import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Truck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCard } from "@/components/BookCard";
import { featuredBooks } from "@/data/books";
import heroImage from "@/assets/book-wallpaper.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation } from "swiper/modules"; // ✅ correct import
import CountUp from "react-countup";

export default function Home() {

  const features = [
    {
      icon: BookOpen,
      title: "Vast Collection",
      description: "Over 10,000+ books across all genres and categories"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $25 worldwide"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment information is always safe and secure"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Our customer service team is here to help anytime"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
<section className="relative bg-[#2e2e38] text-white overflow-hidden pt-[50px] pb-[70px] h-[850px] md:pt-[200px] md:h-[850px]">
   <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-72 h-72 bg-[#4d5ddd]/30 rounded-full animate-pulse-slow top-10 left-20"></div>
    <div className="absolute w-56 h-56 bg-[#7591b9]/20 rounded-full animate-pulse-slow top-1/2 left-1/2"></div>
    <div className="absolute w-64 h-64 bg-[#4d5ddd]/10 rounded-full animate-pulse-slow bottom-10 right-16"></div>
  </div>

  {/* Soft Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#2e2e38]/90 via-[#4d5ddd]/20 to-[#2e2e38]/90 pointer-events-none transform translate-y-0 will-change-transform" style={{ transition: "transform 0.2s" }}></div>

  <div className="relative z-10 container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      {/* Hero Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
        Discover Your Next
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d5ddd] via-[#7591b9] to-[#4d5ddd] animate-gradient">
          Great Read
        </span>
      </h1>


      {/* Subtitle */}
      <p className="text-lg md:text-xl mb-8 text-[#7591b9]">
        Explore thousands of books from bestsellers to hidden gems
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-[#4d5ddd] to-[#7591b9] text-white rounded-xl shadow-lg hover:opacity-90 transition"
        >
          <Link to="/books" className="flex items-center gap-2">
            Browse Books
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-[#4d5ddd] text-[#4d5ddd] rounded-xl hover:text-white hover:bg-[#4d5ddd]/20 transition"
        >
          <Link to="/categories">Shop by Category</Link>
        </Button>
      </div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-12">
  <div className="text-center p-6 bg-[#2e2e38]/50 rounded-2xl shadow-lg">
    <div className="text-3xl font-bold text-[#4d5ddd]">
        <CountUp end={10000} duration={2} />+
    </div>
    <div className="text-sm text-[#7591b9]">Books Available</div>
  </div>
  <div className="text-center p-6 bg-[#2e2e38]/50 rounded-2xl shadow-lg">
    <div className="text-3xl font-bold text-[#4d5ddd]">
      <CountUp end={500000} duration={2} />+
    </div>
    <div className="text-sm text-[#7591b9]">Happy Readers</div>
  </div>
  <div className="text-center p-6 bg-[#2e2e38]/50 rounded-2xl shadow-lg">
    <div className="text-3xl font-bold text-[#4d5ddd]">
              <CountUp end={4.8} duration={2} decimals={1}/>★
    </div>
    <div className="text-sm text-[#7591b9]">Customer Rating</div>
  </div>
</div>

    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="w-6 h-10 border-2 border-[#4d5ddd] rounded-full flex justify-center">
      <div className="w-1 h-3 bg-[#4d5ddd] rounded-full mt-2 animate-bounce"></div>
    </div>
  </div>
</section>







      {/* Featured Books */}
         <section className="py-16 bg-transparent">
         {/* soft background to split sections */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4d5ddd]">
            Featured Books
          </h2>
        </div>

        <div className="relative">
          {/* Carousel */}
          <Swiper
            modules={[Navigation]} // ← add this
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="pb-8"
          >
            {featuredBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#4d5ddd] text-white p-2 rounded-full shadow-lg hover:bg-[#7591b9]">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#4d5ddd] text-white p-2 rounded-full shadow-lg hover:bg-[#7591b9]">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>








{/* Delivery CTA Section */}
<section className="py-20 bg-transparent">
  <div className="container mx-auto px-6">
    <div className="relative flex flex-col md:flex-row items-center bg-[#2e2e38] text-white rounded-3xl overflow-hidden shadow-xl">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-8 lg:p-12 space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Fast, Reliable Book Delivery
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          At <span className="text-[#4d5ddd] font-semibold">BookHaven</span>, your next read is just a click away.  
          We carefully package and deliver books straight to your door, so you can enjoy reading without the wait.
        </p>

        {/* Features List */}
        <ul className="space-y-2 text-sm md:text-base text-gray-300">
          <li>• Secure and fast nationwide delivery</li>
          <li>• Protective packaging for every order</li>
          <li>• Easy tracking of your shipments</li>
          <li>• Hassle-free returns & exchanges</li>
        </ul>

        {/* Button */}
        <Button
          asChild
          size="lg"
          className="mt-4 bg-gradient-to-r from-[#4d5ddd] to-[#7591b9] text-white rounded-xl shadow-lg hover:opacity-90 transition"
        >
          <Link to="/books">Shop Now</Link>

        </Button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 px-[12px] pb-[12px]">

        <img
          src={heroImage}
          alt="Book Delivery"
          className="object-cover w-full h-full rounded-[50px] md:rounded-r-3xl"
        />
      </div>
    </div>
  </div>
</section>





      {/* Features Section */}
<section className="relative py-20 bg-gradient-to-b from-[#f5f5f7] via-white to-[#e0e4ff] overflow-hidden">
  {/* Background Animated Blobs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-72 h-72 bg-[#4d5ddd]/20 rounded-full blur-3xl top-20 left-10 animate-[float_8s_ease-in-out_infinite]"></div>
    <div className="absolute w-96 h-96 bg-[#7591b9]/15 rounded-full blur-3xl bottom-0 right-20 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
  </div>

  <div className="relative z-10 container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
        Why Choose <span className="bg-gradient-to-r from-[#4d5ddd] to-[#7591b9] bg-clip-text text-transparent">BookHaven?</span>
      </h2>
      <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto">
        Experience books like never before with features that truly make a difference.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="relative group p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
        >
          {/* Subtle Glow Border on Hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#4d5ddd]/40 transition duration-500"></div>

          <CardHeader className="relative z-10">
            {/* Icon */}
            <div className="relative mx-auto mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4d5ddd]/15 to-[#7591b9]/15 group-hover:from-[#4d5ddd]/25 group-hover:to-[#7591b9]/25 transition">
                <feature.icon className="h-7 w-7 text-[#4d5ddd] group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Title */}
            <CardTitle className="text-xl font-semibold group-hover:text-[#4d5ddd] transition-colors text-gray-900">
              {feature.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-10">
            <CardDescription className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


{/* Tailwind animations */}
<style>
{`
  @keyframes float {
    0%, 100% { transform: translateY(0) }
    50% { transform: translateY(-20px) }
  }
`}
</style>




<footer className="relative bg-gradient-to-b from-[#1a1a1f] via-[#16161a] to-[#1a1a1f] text-gray-300 pt-16 pb-8">
  <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

    {/* Brand */}
    <div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4d5ddd] to-[#7591b9] bg-clip-text text-transparent mb-4">
        BookHaven
      </h3>
      <p className="text-sm leading-relaxed text-gray-400">
        Your trusted destination for books delivered straight to your door. 
        Explore worlds, gain knowledge, and experience stories like never before.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Shop</a></li>
        <li><a href="#" className="hover:text-[#4d5ddd] transition">About Us</a></li>
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Contact</a></li>
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Blog</a></li>
      </ul>
    </div>

    {/* Customer Support */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Help Center</a></li>
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Returns & Refunds</a></li>
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Shipping Info</a></li>
        <li><a href="#" className="hover:text-[#4d5ddd] transition">Track Order</a></li>
      </ul>
    </div>

    {/* Stay Connected */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
      
<form className="flex flex-wrap items-center gap-2 w-full max-w-md mx-auto">
  <input
    type="email"
    placeholder="Your email"
    className="flex-1 min-w-0 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4d5ddd] text-sm"
  />
  <button
    type="submit"
    className="px-4 py-2 bg-[#7591b9] text-white rounded-lg hover:opacity-90 text-sm transition shrink-0"
  >
    Subscribe
  </button>
</form>

      <div className="flex space-x-4">
        <a href="#" className="hover:text-[#4d5ddd] transition"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-[#4d5ddd] transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-[#4d5ddd] transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-[#4d5ddd] transition"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    <p>&copy; {new Date().getFullYear()} BookHaven. All rights reserved.</p>
    <p className="mt-2">Made with ❤️ for book lovers everywhere.</p>
  </div>
</footer>






 
    </div>
  );
}