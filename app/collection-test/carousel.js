'use client'

import Image from "next/image";
import {penguinSpecies} from "@/app/collection-test/data/penguin-data";
import {DataCard} from "@/app/collection-test/data-card";
import {useState} from "react";

export function DataCardCarousel() {

  const shownIDs = 4;
  const [currentMinEntry, setCurrentMinEntry] = useState(0);

  function handleLeft() {
    setCurrentMinEntry(currentMinEntry - shownIDs);
  }

  function handleRight() {
    setCurrentMinEntry(currentMinEntry + shownIDs);
  }

  return (
    <section className="p-4 bg-gray-100 w-full flex flex-col">
      <h1 className="text-2xl font-bold text-lg text-black">
        Penguin Carousel
      </h1>
      <div className="flex flex-row items-center w-full">
        <button onClick={handleLeft} className="text-black font-bold text-3xl bg-gray-200 rounded-md p-4">
          {"<"}
        </button>
        {penguinSpecies.slice(currentMinEntry, currentMinEntry + shownIDs).map((penguin) => (
          <DataCard
            key={penguin.id}
            commonName={penguin.commonName}
            scientificName = {penguin.scientificName}
            mass={penguin.mass}
            habitat={penguin.habitat}
            image={penguin.image}
          />
        ))}
        <button onClick={handleRight} className="text-black font-bold text-3xl bg-gray-200 rounded-md p-4">
          {">"}
        </button>
      </div>
    </section>

  )
}