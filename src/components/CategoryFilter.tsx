import { useState } from "react";

const categories = [
  "All",
  "Sarees",
  "Kurtis",
  "Dresses",
  "Lehengas",
  "Tops",
  "Ethnic Wear",
  "Western",
  "Party Wear",
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="py-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max px-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`category-chip whitespace-nowrap ${
              activeCategory === category
                ? "category-chip-active"
                : "category-chip-inactive"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
