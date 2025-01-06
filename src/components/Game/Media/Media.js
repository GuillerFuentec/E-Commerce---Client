import { Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared";
import { Video } from "./Video";
import { Gallery } from "./Gallery";
import styles from "./Media.module.scss";

export function Media(props) {
  const { trailer, screenshots } = props;

  return (
    <Container>
      <Video url={trailer} />
      <Separator height={30} />
      <Gallery screenshots={screenshots.data} />
    </Container>
  );
}
