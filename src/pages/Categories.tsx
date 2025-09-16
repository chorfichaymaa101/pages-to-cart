import { Link } from "react-router-dom";
import { BookOpen, Heart, Zap, Users, Globe, Brain, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories, mockBooks } from "@/data/books";

export default function Categories() {
  // Create category data with icons and book counts
  const categoryData = [
    {
      name: "Classic Literature",
      icon: BookOpen,
      description: "Timeless masterpieces that have shaped literature",
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
    },
    {
      name: "Science Fiction",
      icon: Zap,
      description: "Explore future worlds and technological wonders",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      name: "Romance",
      icon: Heart,
      description: "Love stories that will warm your heart",
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
    },
    {
      name: "Fantasy",
      icon: Globe,
      description: "Magical realms and epic adventures await",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      name: "Self-Help",
      icon: Brain,
      description: "Transform your life with practical wisdom",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      name: "Mystery",
      icon: Users,
      description: "Thrilling puzzles and suspenseful tales",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      name: "History",
      icon: Award,
      description: "Journey through the past and learn from history",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
    {
      name: "Business",
      icon: Briefcase,
      description: "Strategy, leadership, and entrepreneurship",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    },
  ];

  // Get book count for each category
  const getCategoryCount = (categoryName: string) => {
    return mockBooks.filter(book => book.category === categoryName).length;
  };

  // Filter out "All Books" from categories and match with our category data
  const displayCategories = categoryData.filter(cat => 
    categories.includes(cat.name)
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Browse by Category</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your next favorite book by exploring our carefully curated categories.
            From timeless classics to modern bestsellers, find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayCategories.map((category) => {
            const bookCount = getCategoryCount(category.name);
            const IconComponent = category.icon;
            
            return (
              <Link
                key={category.name}
                to={`/books?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      {bookCount} book{bookCount !== 1 ? 's' : ''} available
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Popular Categories CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Can't decide? Start with our most popular books
            </h2>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Browse our bestsellers and discover what readers around the world are loving.
            </p>
            <Link
              to="/books?sort=popularity"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              View Popular Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}