import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";
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
        {/* HERO Section */}
        <Home.BannerLastGamePublished></Home.BannerLastGamePublished>
        <Separator height={100} />
        <Container>
          <Home.LastestGames title="Latest Drops" />
        </Container>
        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />
        <Container>
        {/* Plasytation Section */}
          <Home.LastestGames
            title="PLaystation"
            platformID={platformID.playstation}
            limit={3}
          />
        </Container>
        <Separator height={100} />
        {/* Publicitation */}
        <BannerAd
          title="Sign up and get better offers"
          subtitle="Buy with other games and choose you own"
          btnTitle="Sign up now"
          btnLink="/account"
          img="/img/img01.png"
        />
        <Separator height={100} />
        {/* X-BOX Games */}
        <Container>
          <Home.LastestGames
            title="X-Box"
            platformID={platformID.xbox}
            limit={3}
          />
        </Container>
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
