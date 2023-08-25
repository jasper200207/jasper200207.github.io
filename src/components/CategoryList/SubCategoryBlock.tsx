import Link from "next/link";
import { SubCategory } from ".";

type Props = {
  categoryName: string;
  subCategory: SubCategory;
};

const SubCategoryBlock = ({ categoryName, subCategory }: Props) => {
  return (
    <li className="ml-5">
      <Link href={`/categories/${categoryName}/${subCategory.name}`}>{subCategory.name}</Link>
    </li>
  );
};

export default SubCategoryBlock;
