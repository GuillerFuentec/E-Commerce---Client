import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Separator } from "@/components/Shared";
import { Home } from "@/components/Home";

export default function HomePage() {
  return (
    <>
      {/* SEO */}
      <BasicLayout>
        <Home.BannerLastGamePublished></Home.BannerLastGamePublished>
        <Separator height={100} />
        <Container>
          <Home.LastestGames></Home.LastestGames>
        </Container>
      </BasicLayout>
    </>
  );
}
