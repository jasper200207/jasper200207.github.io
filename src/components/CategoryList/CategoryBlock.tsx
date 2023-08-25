import { Category } from ".";

type Props = {
  category: Category;
  children: React.ReactNode;
};

const CategoryBlock = ({ category, children }: Props) => {
  return (
    <details>
      <summary>
        {category.name}
      </summary>
      {children}
    </details>
  );
};

export default CategoryBlock;
