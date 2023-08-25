import { allAbouts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

const AboutPage = () => {
  const about = allAbouts[0];

  const Content = getMDXComponent(about.body.code);

  return (
    <div className="w-full h-full py-10 px-20 text-black">
      <Content />
    </div>
  );
};
export default AboutPage;
