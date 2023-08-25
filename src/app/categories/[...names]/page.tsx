import { allPosts } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  params: {
    names: string;
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
