import getCharacter from "../../../functions/getCharacter";

export default async function Character({ params }: any) {
  const character = await getCharacter(params.id);
  return <>{character && character.name}</>;
}
