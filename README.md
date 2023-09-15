#Project : My-Course-Roster

## Project Features :

Feature 1: Card Selection and Add to Cart:
- This feature allows users to browse a list of cards, each representing a course or item. Users can click on a card to select it for their cart.
- When a card is selected, it is visually indicated, and its details are added to the user's shopping cart.
- Users can easily manage their selected cards and see the real-time update of the cart's content.

Feature 2: Credit Limit Checking:
- To ensure responsible shopping, the project incorporates a credit limit checking feature.
- As users select cards and add them to the cart, the system keeps track of the total cost hour of the selected items.
- If the total cost exceeds a predefined credit limit (in this case, 20 credits hour), the system provides feedback to the user indicating that their credit limit has been exceeded.
- This feature prevents users from adding too many items to their cart, helping them stay within their budget.

Feature 3: Dynamic Card Display:
- The project employs dynamic card display, adapting to different screen sizes and resolutions.
- Cards are organized in a responsive grid layout, ensuring an optimal user experience on both small and large screens.
- This feature enhances the project's accessibility and usability, allowing users to comfortably browse and select cards from various devices.

## State Management :
In this project, state is managed primarily using React's `useState` hook. The key state variables used are:

- `cards`: An array to store the list of cards fetched from `data.json`.
- `selectedCard`: An array to store the selected cards in the cart.
- `remaining`: A variable to keep track of the remaining credit limit.
- `totalCost`: A variable to calculate and store the total cost of selected cards.

State changes are handled using the `setCards`, `setSelectedCard`, `setRemaining`, and `setTotalCost` functions provided by the `useState` hook.

The `useEffect` hook is used to fetch data from `data.json` when the component mounts.

The `handleCard` function is responsible for adding selected cards to the cart while checking for credit limits and existing selections.