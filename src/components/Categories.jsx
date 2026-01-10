import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      title: "Men",
      category: "men",
      image:
       "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Women",
      category: "women",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    },
    {
      title: "Unisex",
      category: "unisex",
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
  ];

  return (
    <div className="px-8 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Shop by Category
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard key={cat.category} {...cat} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
