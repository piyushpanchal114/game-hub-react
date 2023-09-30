import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const genre = data?.results.find((genre) => genre.id === gameQuery.genreId);
  const heading = `${gameQuery.platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={2} fontSize="5xl">
      {" "}
      {heading}
    </Heading>
  );
};

export default GameHeading;
