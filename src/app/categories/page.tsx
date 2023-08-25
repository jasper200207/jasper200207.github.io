import CategoryList, { Category } from "@/components/CategoryList";
import { allPosts } from "contentlayer/generated";

const CategoriesPage = () => {
  const categoryNames = Array.from(
    new Set(allPosts.map((post) => post.category))
  );
  const categories: Array<Category> = categoryNames.map((categoryName) => {
    const categoryPosts = allPosts.filter(
      (post) => post.category === categoryName
    );
    const subCategoryNames = Array.from(
      new Set(categoryPosts.map((post) => post.subCategory))
    );
    return {
      name: categoryName,
      subCategories: subCategoryNames.map((subCategoryName) => {
        const subCategoryPosts = categoryPosts.filter(
          (post) => post.subCategory === subCategoryName
        );
        return {
          name: subCategoryName,
          postAmount: subCategoryPosts.length,
        };
      }),
    };
  });

  return (
    <div className="w-full h-full flex flex-col px-20 py-10 text-black">
      <p className="text-3xl">Categories</p>
      <CategoryList categories={categories} />
    </div>
  );
};
export default CategoriesPage;
