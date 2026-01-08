import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="hero-gradient rounded-2xl p-6 md:p-8 text-primary-foreground mb-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium opacity-90">New Arrivals</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Trendy Ethnic Collection
          </h1>
          <p className="text-sm md:text-base opacity-90 mb-4">
            Up to 80% OFF on latest fashion
          </p>
          <Button
            variant="secondary"
            className="bg-card text-foreground hover:bg-card/90 font-semibold"
          >
            Shop Now
          </Button>
        </div>
        <div className="text-6xl md:text-8xl font-bold opacity-20">
          80%
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
