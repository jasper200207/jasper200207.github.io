import CategoryBlock from "./CategoryBlock";
import SubCategoryBlock from "./SubCategoryBlock";

export type SubCategory = {
  name: string;
  postAmount: number;
};

export type Category = {
  name: string;
  subCategories: Array<SubCategory>;
};

type Props = {
  categories: Array<Category>;
};

const CategoryList = ({ categories }: Props) => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryBlock category={category} key={category.name}>
          {category.subCategories.map((subCategory) => (
            <SubCategoryBlock
              categoryName={category.name}
              subCategory={subCategory}
              key={`${category.name}_${subCategory.name}`}
            />
          ))}
        </CategoryBlock>
      ))}
    </div>
  );
};

export default CategoryList;
