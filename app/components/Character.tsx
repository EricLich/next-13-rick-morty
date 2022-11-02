"use client";

import Image from "next/image";
import Link from "next/link";
import { Character } from "../../utils/types";

interface CharacterProps {
  character: Character;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Link
      href={`/characters/${character.id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Image
        src={character.image}
        alt={`${character.name} image`}
        width={100}
        height={100}
      />

      <h2>Name: {character.name}</h2>
      <p>Spacies: {character.species}</p>
      <p>Status: {character.status}</p>
    </Link>
  );
};

export default Character;
