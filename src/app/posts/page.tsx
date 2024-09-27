import RecipeList from "@/components/Recipe-List";
import { Suspense } from "react";
import RecipeListLoader from "./RecipeListLoader";

export default async function Posts() {
  return (
    <main className="flex  flex-col gap-8  px-12 py-24 leading-8">
      <h1 className="text-xl sm:text-2xl font-medium">
        Free recipes for you to try
      </h1>
      <Suspense fallback={<RecipeListLoader />}>
        <RecipeList />
      </Suspense>
    </main>
  );
}
