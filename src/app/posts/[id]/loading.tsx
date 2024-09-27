import Image from "next/image";

export default function Loading() {
  let recipe = [1, 2, 3, 4, 5];
  
  return (
    <main className="p-12 flex flex-col gap-12 animate-pulse">
      {/* Skeleton for Title */}
      <span className="space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </span>

      {/* Skeleton for Image */}
      <div className="w-[150px] h-[150px] bg-gray-300 rounded-full"></div>

      {/* Skeleton for List */}
      <ol className="text-left flex flex-col gap-8">
        {recipe &&
          recipe.map((item, index) => (
            <li key={item} className="flex items-center gap-4">
              {/* Skeleton Circle for Number */}
              <span className="border-2 border-transparent rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center"></span>

              {/* Skeleton Line for Text */}
              <div className="h-6 bg-gray-300 rounded w-full"></div>
            </li>
          ))}
      </ol>
    </main>
  );
}
