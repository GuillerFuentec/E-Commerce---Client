import { Game } from "@/components/Game";
import { BasicLayout } from "@/layouts";
import { Separator, Seo } from "@/components/Shared";

export default function GamePage(props) {
  const { game } = props;

  const wallpaper = game.attributes.wallpaper;

  return (
    <>
      <Seo
        title={game.attributes.title}
        description={game.attributes.summary}
      />
      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper.data.attributes.url} />

        <Game.Panel game={game} />

        <Separator height={50} />

        <Game.Media
          trailer={game.attributes.trailer}
          screenshots={game.attributes.screenshots}
        />

        <Separator height={50} />

        <Game.Info game={game.attributes} />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
