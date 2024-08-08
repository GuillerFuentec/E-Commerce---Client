import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";

export default function HomePage() {
  return (
    <>
      {/* SEO */}
      <BasicLayout isContainer>
        <Home.BannerLastGamePublished></Home.BannerLastGamePublished>
      </BasicLayout>
    </>
  );
}
