import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Truck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCard } from "@/components/BookCard";
import { featuredBooks } from "@/data/books";
import heroImage from "@/assets/hero-books.jpg";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95"></div>
        </div>
        
        {/* Animated Book Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Books Animation */}
          <div className="absolute top-20 left-10 w-8 h-10 bg-primary/10 rounded-sm animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-32 right-20 w-6 h-8 bg-accent/20 rounded-sm animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-7 h-9 bg-primary/15 rounded-sm animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-40 right-1/3 w-5 h-7 bg-accent/15 rounded-sm animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Discover Your Next
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-warm animate-pulse">
                Great Read
              </span>
            </h1>
            
            {/* Subtitle with Typewriter Effect */}
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Explore thousands of books from bestsellers to hidden gems
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg">
                <Link to="/books">
                  Browse Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="shadow-lg border-2 hover:bg-secondary/80">
                <Link to="/categories">
                  Shop by Category
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Books Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked selections from our curators
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} variant="featured" />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/books">
                View All Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose BookHaven?
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner in the world of books
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-none bg-background">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Reading Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of readers who trust BookHaven for their literary adventures.
              Create your account and get exclusive access to deals and recommendations.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Link to="/books">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}