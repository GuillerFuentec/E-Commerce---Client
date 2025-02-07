import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  GamesGrid,
  Separator,
  NoResult,
  Pagination,
  Seo,
} from "@/components/Shared";


export default function PlatformPage(props) {
  const { games, platform, pagination } = props;
  const hasProducts = size(games) > 0;

  return (
    <>
    <Seo title={`${platform.attributes.title}'s games`}/>
      <BasicLayout relative>
        <Container>
          <Separator height={50} />
          <h2>{platform.attributes.title}</h2>

          {hasProducts ? (
            <>
              <GamesGrid games={games} />
              <Separator height={30} />
              <Pagination
                totalPage={pagination.pageCount}
                currentPage={pagination.page}
              />
            </>
          ) : (
            <NoResult
              text={`The category ${platform.attributes.title} doesn't have products yet`}
            />
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
