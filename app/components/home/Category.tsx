"use client";
const Category = () => {
  const categoryList = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
    { id: 9, name: "Category 9" },
    { id: 10, name: "Category 10" },
  ];

  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="border border-slate-500 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer  flex-1 px-4 py-2 text-center"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
