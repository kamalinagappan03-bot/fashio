import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-4">
        <HeroBanner />
        <CategoryFilter />
        
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Trending Dresses
            </h2>
            <span className="text-sm text-muted-foreground">
              8 Products
            </span>
          </div>
          <ProductGrid />
        </div>
      </main>

      {/* Bottom spacing for mobile */}
      <div className="h-20 md:h-8" />
    </div>
  );
};

export default Index;
