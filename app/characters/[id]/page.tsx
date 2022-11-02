import getCharacter from "../../../functions/getCharacter";

export default async function Character({ params }: any) {
  const character = await getCharacter(params.id);

  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
      {character && character.name}
    </div>
  );
}
