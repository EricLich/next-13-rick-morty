import getCharacters from "../../functions/getCharacters.";

export default async function Characters() {
  const characters = await getCharacters();
  return (
    <div>
      {characters &&
        characters?.map((user: { id: number; name: string }) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}
