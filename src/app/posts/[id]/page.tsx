import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const posts = allPosts;

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

type PostDetailPageProps = {
  params: {
    id: string;
  };
};

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const post = allPosts.find((post) => post.id === params.id);
  if (!post) throw new Error(`해당하는 Id (${params.id})의 게시물이 없습니다.`);

  const Content = useMDXComponent(post.body.code);

  return (
    <div className="w-full h-full py-10 px-20 text-black">
      <div className="mb-8 text-start">
        <p className="text-3xl font-bold">{post.title}</p>
        <time dateTime={post.date} className="text-deepTextGray text-sm">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <Content />
    </div>
  );
};
export default PostDetailPage;
