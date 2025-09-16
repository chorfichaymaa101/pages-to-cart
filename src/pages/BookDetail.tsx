import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockBooks } from "@/data/books";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/components/ui/use-toast";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, isInCart } = useCart();

  const book = mockBooks.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Book not found</h2>
          <Button asChild>
            <Link to="/books">Back to Books</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${book.title} added to cart`,
    });
  };

  const handleBuyNow = () => {
    if (!isInCart(book.id)) {
      addToCart(book, quantity);
    }
    navigate("/cart");
  };

  const handleWishlist = () => {
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
        className={`h-5 w-5 ${
          i < Math.floor(rating) 
            ? "text-accent fill-accent" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  const features = [
    { icon: Truck, text: "Free shipping over $25" },
    { icon: RotateCcw, text: "30-day return policy" },
    { icon: Shield, text: "Secure payment" },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/books">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Books
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Book Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <img
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                className="w-full h-[600px] object-cover"
              />
            </Card>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            {/* Category */}
            <Badge variant="secondary">{book.category}</Badge>

            {/* Title & Author */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground">by {book.author}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {renderStars(book.rating)}
              </div>
              <span className="font-medium">{book.rating}</span>
              <span className="text-muted-foreground">({book.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-primary">${book.price}</span>
              {book.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${book.originalPrice}
                </span>
              )}
              {book.originalPrice && (
                <Badge variant="destructive">
                  Save ${(book.originalPrice - book.price).toFixed(2)}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {book.inStock ? (
                <>
                  <div className="h-3 w-3 bg-success rounded-full"></div>
                  <span className="text-success font-medium">
                    In Stock ({book.stockCount} available)
                  </span>
                </>
              ) : (
                <>
                  <div className="h-3 w-3 bg-destructive rounded-full"></div>
                  <span className="text-destructive font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-r-none"
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 border-l border-r">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.min(book.stockCount, quantity + 1))}
                    className="rounded-l-none"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={!book.inStock || isInCart(book.id)}
                  className="flex-1"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isInCart(book.id) ? "Already in Cart" : "Add to Cart"}
                </Button>
                <Button
                  onClick={handleBuyNow}
                  disabled={!book.inStock}
                  variant="secondary"
                  className="flex-1"
                >
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleWishlist}
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <feature.icon className="h-4 w-4" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <Separator />

            {/* Book Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ISBN:</span>
                <span>{book.isbn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pages:</span>
                <span>{book.pages}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Language:</span>
                <span>{book.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Publisher:</span>
                <span>{book.publisher}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Published:</span>
                <span>{new Date(book.publishedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({book.reviewCount})</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-12 text-muted-foreground">
                    <Star className="h-12 w-12 mx-auto mb-4" />
                    <p>Reviews coming soon! This book has {book.reviewCount} reviews.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Product Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ISBN:</span>
                          <span>{book.isbn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pages:</span>
                          <span>{book.pages} pages</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Language:</span>
                          <span>{book.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Publisher:</span>
                          <span>{book.publisher}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Availability</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stock:</span>
                          <span className={book.inStock ? "text-success" : "text-destructive"}>
                            {book.inStock ? `${book.stockCount} in stock` : "Out of stock"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shipping:</span>
                          <span>Free on orders over $25</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Returns:</span>
                          <span>30-day return policy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}