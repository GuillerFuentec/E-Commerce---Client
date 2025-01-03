import { useEffect } from "react";
import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import {
  GamesGrid,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared";

export default function SearchPage(props) {
  const { games, pagination, searchText } = props;
  const hasResult = size(games) > 0;
  console.log(games);
  

  useEffect(() => {
    document.getElementById("search-games").focus();

    return () => {};
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />
          <h2>Search: {searchText}</h2>
          {hasResult ? (
            <>
              <GamesGrid games={games} />
            </>
          ) : (
            <>
              <NoResult text="No results was founded" />
            </>
          )}
        </Container>
      </BasicLayout>
    </>
  );
}
