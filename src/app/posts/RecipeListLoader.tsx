export default function RecipeListLoader() {
  return (
    <ul className="space-y-4 animate-pulse">
      {/* Simulate 5 loading list items */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
        <li key={index} className="h-6 bg-gray-300 rounded w-3/4"></li>
      ))}
    </ul>
  );
}
