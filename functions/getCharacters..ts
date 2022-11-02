export default async function getCharacters() {
  const { results } = await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();

  return results;
}