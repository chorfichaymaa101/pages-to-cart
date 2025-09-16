import { BookOpen, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: BookOpen,
      title: "Passion for Books",
      description: "We believe that books have the power to transform lives, spark imagination, and connect people across cultures and generations."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is guided by what's best for our customers. Your reading journey is our priority."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're building a community of book lovers who share recommendations, reviews, and their love for literature."
    },
    {
      icon: Award,
      title: "Quality",
      description: "From our carefully curated selection to our customer service, we maintain the highest standards in everything we do."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BookHaven</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded with a simple mission: to connect readers with books that inspire, educate, and entertain. 
              We're more than just an online bookstore – we're your partners in discovery.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BookHaven began in 2020 when a group of book enthusiasts realized that finding great books online 
                shouldn't be a challenge. We wanted to create a place where readers could easily discover their 
                next favorite book, whether it's a timeless classic or a contemporary bestseller.
              </p>
              <p>
                What started as a small online catalog has grown into a comprehensive bookstore serving thousands 
                of readers worldwide. We've carefully curated our collection to include books across every genre, 
                ensuring there's something for every type of reader.
              </p>
              <p>
                Today, we're proud to be a trusted source for book lovers everywhere, offering not just books, 
                but a complete reading experience with personalized recommendations, detailed reviews, and 
                exceptional customer service.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-warm rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-white/80">Books Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-white/80">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-white/80">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every book in our collection is chosen with care. Our team of literary enthusiasts reviews each title 
              to ensure we're offering the best reading experiences. We're committed to supporting authors, publishers, 
              and most importantly, readers like you.
            </p>
            
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-4">
                Have questions, suggestions, or just want to talk about books? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="mailto:hello@bookhaven.com" 
                  className="text-primary hover:underline font-medium"
                >
                  hello@bookhaven.com
                </a>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <a 
                  href="tel:1-800-BOOKS-01" 
                  className="text-primary hover:underline font-medium"
                >
                  1-800-BOOKS-01
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}