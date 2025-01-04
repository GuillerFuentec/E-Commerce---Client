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
  const hasResult = size(games.data) > 0;

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
              <GamesGrid games={games.data} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPage={pagination.pageCount}
              />
            </>
          ) : (
            <>
              <NoResult text={"No result was founded"} />
            </>
          )}
              <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
