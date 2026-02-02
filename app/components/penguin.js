import Image from "next/image"

export function PenguinAbout() {
    return(
      <section className="p-4">
        <header>
          <h1 className="mb-4 text-2xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Emperor Penguin</h1>
        </header>

        {/* <Image src="..\..\public\PenguinFight.png" width={100} height={100} alt="penguins fighting"/> */}

        <div className="">
          <h3 className="text-xl font-bold text-heading">Read More:</h3>
          <p>
            <a href="https://www.britannica.com/animal/emperor-penguin">Britannica</a> <br/>
            <a href="https://www.animalfunfacts.net/penguins/149-emperor-penguin.html">Animal Fun Facts</a>
          </p>

          <h2 className="mb-4 text-2xl font-bold tracking-tight text-heading lg:text-3xl">Strengths</h2>
          <h3 className="text-xl font-bold text-heading">Mass & Stability</h3>
          <ul className="max-w-md space-y-1 text-body list-disc list-inside">
            <li>
            22–45 kg (50–100 lbs), heavier than many medium animals.
            </li>
            <li>
            Low center of gravity makes it hard to knock over on flat ground.
            </li>
            <li>
            Dense body absorbs glancing impacts better than lighter birds.
            </li>
          </ul>
          <h3 className="text-xl font-bold text-heading">Powerful Flippers</h3>
          <ul className="max-w-md space-y-1 text-body list-disc list-inside">
            <li>
            Strong, rigid flippers capable of heavy blunt-force strikes.
            </li>
            <li>
            Much stronger than flying bird wings.
            </li>
          </ul>
          <h3 className="text-xl font-bold text-heading">Aquatic Dominance</h3>
          <ul className="max-w-md space-y-1 text-body list-disc list-inside">
            <li>
            Exceptionally fast and maneuverable in water.
            </li>
            <li>
            Can outswim and outturn most predators underwater.
            </li>
            <li>
            Able to disengage by diving where many threats cannot follow.
            </li>
          </ul>
          <h3 className="text-xl font-bold text-heading">Cold Endurance</h3>
          <ul className="max-w-md space-y-1 text-body list-disc list-inside">
            <li>
            Extreme cold resistance; fully functional in subzero temperatures.
            </li>
            <li>
            Thick fat layer prevents energy loss and shock.
            </li>
            <li>
            Performs best where many animals are slowed or weakened.
            </li>
          </ul>
          <h3 className="text-xl font-bold text-heading">Blunt Force Defense</h3>
          <ul className="max-w-md space-y-1 text-body list-disc list-inside">
            <li>
            Thick skin, dense feathers, and fat layer reduce damage from bites or pecks.
            </li>
            <li>
            Less vulnerable to shallow punctures than lightly built animals.
            </li>
          </ul>
          <h3 className="text-xl font-bold text-heading">High Pain Tolerance</h3>
          <ul className="max-w-md space-y-1 text-body list-disc list-inside">
            <li>
            Evolutionarily adapted to harsh conditions.
            </li>
            <li>
            Less likely to panic from non-lethal injuries.
            </li>
          </ul>
        </div>

				<h2 className="mb-4 text-2xl font-bold tracking-tight text-heading lg:text-3xl">Weaknesses</h2>
				<h3 className="text-xl font-bold text-heading">No Natural Weapons</h3>
				<ul className="max-w-md space-y-1 text-body list-disc list-inside">
					<li>
					No teeth or claws.
					</li>
					<li>
					Beak is blunt and primarily for grasping fish, not tearing flesh.
					</li>
					<li>
					Cannot inflict deep penetrating wounds.
					</li>
				</ul>
				<h3 className="text-xl font-bold text-heading">Poor Land Mobility</h3>
				<ul className="max-w-md space-y-1 text-body list-disc list-inside">
					<li>
					Awkward and slow on land compared to terrestrial animals.
					</li>
					<li>
					Limited ability to chase or reposition quickly.
					</li>
					<li>
					Vulnerable if forced to fight outside water.
					</li>
				</ul>
				<h3 className="text-xl font-bold text-heading">Reliance on Environment</h3>
				<ul className="max-w-md space-y-1 text-body list-disc list-inside">
					<li>
					Effectiveness drops sharply away from ice or water.
					</li>
					<li>
					On dry land, escape options are limited.
					</li>
				</ul>
				<h3 className="text-xl font-bold text-heading">Limited Grappling Ability</h3>
				<ul className="max-w-md space-y-1 text-body list-disc list-inside">
					<li>
					Flippers lack fine control for holding or pinning.
					</li>
					<li>
					Cannot restrain an opponent effectively.
					</li>
				</ul>
				<h3 className="text-xl font-bold text-heading">Poor Vertical Awareness</h3>
				<ul className="max-w-md space-y-1 text-body list-disc list-inside">
					<li>
					Vulnerable to attacks from above or behind on land.
					</li>
					<li>
					Limited neck flexibility reduces rear defense.
					</li>
				</ul>
				<h3 className="text-xl font-bold text-heading">Not an Aggressive Species</h3>
				<ul className="max-w-md space-y-1 text-body list-disc list-inside">
					<li>
					Defensive, not confrontational by nature.
					</li>
					<li>
					Likely to flee rather than persist in prolonged conflict when possible.
					</li>
				</ul>
      </section>
    )
}