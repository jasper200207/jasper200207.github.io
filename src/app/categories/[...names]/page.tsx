import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export async function getStaticPaths() {
  const posts = allPosts;

  let paths = [];
  const categoryNames = Array.from(new Set(posts.map((post) => post.category)));
  for (const categoryName of categoryNames) {
    const subCategoryNames = Array.from(
      new Set(
        posts
          .filter((post) => post.category === categoryName)
          .map((post) => post.subCategory)
      )
    );
    for (const subCategoryName of subCategoryNames) {
      paths.push({
        params: {
          names: [categoryName, subCategoryName],
        },
      });
    }
  }

  return { paths, fallback: false };
}

type Props = {
  params: {
    names: Array<string>;
  };
};

const CategoriesDetail = ({ params }: Props) => {
  const posts = allPosts.filter(
    (post) =>
      post.category === params.names[0] && post.subCategory === params.names[1]
  );

  return (
    <div className="w-full h-full flex flex-col px-20 py-10 text-black">
      <p className="text-3xl">{`${params.names[0]} > ${params.names[1]}`} </p>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};
export default CategoriesDetail;
