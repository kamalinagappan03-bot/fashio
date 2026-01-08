import { Star, Heart, Truck } from "lucide-react";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  freeDelivery?: boolean;
}

const ProductCard = ({
  image,
  title,
  originalPrice,
  currentPrice,
  discount,
  rating,
  reviews,
  freeDelivery = true,
}: ProductCardProps) => {
  return (
    <div className="product-card animate-fade-in group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Discount Badge */}
        <div className="absolute top-2 left-2">
          <span className="discount-badge">{discount}% OFF</span>
        </div>
        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors">
          <Heart className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Title */}
        <h3 className="font-medium text-sm text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="price-current">₹{currentPrice}</span>
          <span className="price-original">₹{originalPrice}</span>
        </div>

        {/* Rating & Free Delivery */}
        <div className="flex items-center justify-between">
          <div className="rating-badge">
            <Star className="h-3 w-3 fill-current" />
            <span>{rating}</span>
            <span className="opacity-75">({reviews})</span>
          </div>
          {freeDelivery && (
            <div className="free-delivery-badge flex items-center gap-1">
              <Truck className="h-3 w-3" />
              <span>Free</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
