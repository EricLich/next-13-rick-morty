import { Character } from "../utils/types";

export default async function getCharacter(charId: string): Promise<Character> {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${charId}`, {
    cache: 'force-cache', // ssg
    next: {
      revalidate: 6000,
    }
  })
  const character = await data.json();
  return character as Character;
}