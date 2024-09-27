 export type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: 'Easy' | 'Medium' | 'Hard'; // You can extend these values as needed
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[]; // E.g., Breakfast, Lunch, Dinner, etc.
  };

  export interface IRecipeList{
    recipes : Recipe[]
  }
  
  