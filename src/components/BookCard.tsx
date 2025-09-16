import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "@/types/book";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/components/ui/use-toast";

interface BookCardProps {
  book: Book;
  variant?: "default" | "featured";
}

export function BookCard({ book, variant = "default" }: BookCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isInCart(book.id)) {
      addToCart(book);
      toast({
        title: "Added to cart",
        description: `${book.title} has been added to your cart.`,
      });
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${book.title} ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-accent fill-accent" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  const cardClasses = variant === "featured" 
    ? "group hover:shadow-lg transition-book book-shadow-hover" 
    : "group hover:shadow-md transition-book";

  return (
    <Link to={`/books/${book.id}`}>
      <Card className={cardClasses}>
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              className="w-full h-72 sm:h-80 object-cover rounded-t-lg"
            />
            
            {/* Price Badge */}
            {book.originalPrice && (
              <Badge 
                variant="destructive" 
                className="absolute top-2 left-2"
              >
                Sale
              </Badge>
            )}

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background"
              onClick={handleWishlist}
            >
              <Heart 
                className={`h-4 w-4 ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} 
              />
            </Button>

            {/* Quick Add to Cart - appears on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button
                onClick={handleAddToCart}
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform"
                disabled={isInCart(book.id)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {isInCart(book.id) ? "In Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>

          <div className="p-4">
            {/* Category */}
            <Badge variant="secondary" className="mb-2 text-xs">
              {book.category}
            </Badge>

            {/* Title & Author */}
            <h3 className="font-semibold text-lg line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {book.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-2">
              by {book.author}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {renderStars(book.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                {book.rating} ({book.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">
                  ${book.price}
                </span>
                {book.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${book.originalPrice}
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              {book.inStock ? (
                <span className="text-xs text-success">
                  {book.stockCount} in stock
                </span>
              ) : (
                <span className="text-xs text-destructive">
                  Out of stock
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}