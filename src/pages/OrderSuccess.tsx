import { Link } from "react-router-dom";
import { CheckCircle, Download, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderSuccess() {
  const orderNumber = `ORD-${Date.now()}`;
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-success mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-success">Order Placed Successfully!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="font-semibold">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Order Date</p>
                  <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                  <p className="font-semibold">
                    {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-semibold text-success">Processing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">Confirmation Email</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an order confirmation email with your receipt and tracking information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Download className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    We're preparing your books for shipment. This usually takes 1-2 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    Your books will be shipped and you'll receive tracking information via email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => window.print()}>
                <Download className="h-4 w-4 mr-2" />
                Print Receipt
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Need help? Contact our customer service at{" "}
              <a href="mailto:support@bookhaven.com" className="text-primary hover:underline">
                support@bookhaven.com
              </a>{" "}
              or call 1-800-BOOKS-01
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}