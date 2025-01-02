import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Separator, BarTrust } from "@/components/Shared";
import { Home } from "@/components/Home";

const platformID = {
  playstation: 1,
  xbox: 2,
  pc: 3,
  nintendo: 4,
};

export default function HomePage() {
  return (
    <>
      {/* SEO */}
      <BasicLayout>
        <Home.BannerLastGamePublished></Home.BannerLastGamePublished>
        <Separator height={100} />
        <Container>
          <Home.LastestGames title="Latest Drops" />
        </Container>
        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />
        <Container>
          <Home.LastestGames platformID={platformID.nintendo} limit={3} />
        <Separator height={50} />
        </Container>
      </BasicLayout>
    </>
  );
}
