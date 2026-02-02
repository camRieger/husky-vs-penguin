import Image from "next/image";

export function DataCard({
                           id,
                           commonName,
                           scientificName,
                           mass,
                           habitat,
                           image
}
)
{
  return (
    <section className="m-4 p-4 bg-gray-200 rounded-md w-full h-75 flex flex-col items-center flex-1">
      <Image src={image} alt={commonName} width="150" height="150" />
      <h2 className="font-bold text-lg text-black">{commonName}</h2>
      <h3 className='italic text-sm text-gray-600'>{scientificName}</h3>
      <p className="text-xs text-gray-600">{mass}</p>
      <p className="text-gray-600">Habitat: {habitat}</p>
    </section>
  )
}