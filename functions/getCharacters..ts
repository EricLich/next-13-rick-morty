import { Character } from "../utils/types";

export default async function getCharacters(): Promise<Character[]> {
  const data = await fetch("https://rickandmortyapi.com/api/character")
  const { results } = await data.json();

  return results as Character[];
}