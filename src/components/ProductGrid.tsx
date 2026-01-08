import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop",
    title: "Women's Floral Printed Georgette Saree with Blouse",
    originalPrice: 2499,
    currentPrice: 499,
    discount: 80,
    rating: 4.2,
    reviews: 1248,
    freeDelivery: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    title: "Embroidered Rayon A-Line Kurta for Women",
    originalPrice: 1299,
    currentPrice: 399,
    discount: 69,
    rating: 4.5,
    reviews: 892,
    freeDelivery: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=500&fit=crop",
    title: "Designer Anarkali Gown with Dupatta Set",
    originalPrice: 3999,
    currentPrice: 899,
    discount: 78,
    rating: 4.3,
    reviews: 567,
    freeDelivery: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    title: "Women's Silk Blend Lehenga Choli Set",
    originalPrice: 4999,
    currentPrice: 1199,
    discount: 76,
    rating: 4.6,
    reviews: 2341,
    freeDelivery: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop",
    title: "Cotton Printed Casual Kurti with Palazzo",
    originalPrice: 1599,
    currentPrice: 449,
    discount: 72,
    rating: 4.1,
    reviews: 1567,
    freeDelivery: true,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1583391733981-8b530c48fa70?w=400&h=500&fit=crop",
    title: "Banarasi Silk Saree with Zari Border",
    originalPrice: 5999,
    currentPrice: 1499,
    discount: 75,
    rating: 4.8,
    reviews: 423,
    freeDelivery: true,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
    title: "Women's Party Wear Maxi Dress",
    originalPrice: 2299,
    currentPrice: 599,
    discount: 74,
    rating: 4.0,
    reviews: 789,
    freeDelivery: false,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    title: "Chikankari Embroidered Cotton Kurta Set",
    originalPrice: 1899,
    currentPrice: 549,
    discount: 71,
    rating: 4.4,
    reviews: 1123,
    freeDelivery: true,
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
