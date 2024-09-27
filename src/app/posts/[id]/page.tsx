import { Recipe } from "@/app/types/recipes";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
   // await new Promise((resolve) => setTimeout(resolve, 2000))

  const recipe: Recipe = await fetch(
    `https://dummyjson.com/recipes/${params.id}`
  ).then((res) => res.json());


  return (
    <main className="p-12 flex flex-col gap-12">
      <span>
        <h1 className="font-semibold text-4xl">{recipe.name}</h1>
        <h2 className="font-medium text-2xl">{recipe.cuisine}</h2>
      </span>

      <Image
        src={recipe.image}
        alt="recipe"
        className="w-[150px] h-[150px]"
        width={256}
        height={256}
        placeholder="blur"
        blurDataURL="https://placehold.co/256x256"
      ></Image>

      <ol className="text-left flex flex-col gap-8">
        {recipe.instructions &&
          recipe.instructions.map((item, index) => (
            <li key={item} className="flex items-center gap-4">
              <span className="border-2 border-orange-700 rounded-full px-4 py-2 text-center w-10 h-10 flex items-center justify-center">
                {index + 1}
              </span>{" "}
              {item}
            </li>
          ))}
      </ol>
    </main>
  );
}
