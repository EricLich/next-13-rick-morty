import getCharacters from "../../functions/getCharacters.";
import type { Character as Char } from "../../utils/types";
import Character from "../components/Character";

export default async function Characters() {
  const characters = await getCharacters();
  return (
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {characters &&
        characters?.map((character: Char) => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  );
}
