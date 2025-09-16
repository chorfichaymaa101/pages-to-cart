import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Truck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCard } from "@/components/BookCard";
import { featuredBooks } from "@/data/books";

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
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next
            <br />
            <span className="text-accent">Great Read</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Explore thousands of books from bestsellers to hidden gems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/books">
                Browse Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/categories">
                Shop by Category
              </Link>
            </Button>
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