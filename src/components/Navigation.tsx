import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const { cartState } = useCart();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Browse Books" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to books page with search query
      window.location.href = `/books?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary-hover transition-colors"
          >
            <BookOpen className="h-8 w-8" />
            <span>BookHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActiveLink(link.href) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar - Desktop */}
<div className="hidden lg:flex flex-1 max-w-md mx-8">
  <form onSubmit={handleSearch} className="w-full">
    <div className="relative w-full">
      {/* Search Icon */}
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />

      {/* Input Field */}
      <Input
        type="search"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-12 pr-4 py-2 w-full rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
      />

      {/* Optional Clear Button */}
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  </form>
</div>


          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative bg-primary text-white hover:bg-primaryy hover:text-black">

                <ShoppingCart className="h-4 w-4" />
                {cartState.itemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs"
                  >
                    {cartState.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden bg-primary text-white hover:bg-primaryy hover:text-black"
        
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              
  <form onSubmit={handleSearch} className="w-full">
    <div className="relative w-full">
      {/* Search Icon */}
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />

      {/* Input Field */}
      <Input
        type="search"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-12 pr-4 py-2 w-full rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
      />

      {/* Optional Clear Button */}
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  </form>


              {/* Mobile Navigation Links */}
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActiveLink(link.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}