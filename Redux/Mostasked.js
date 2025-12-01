// 🔹 1. What is Redux and why do we use it?

// Simple definition + when we need global state (auth, cart, theme, user profile).

// 🔹 2. What are the core principles of Redux?

// Single Source of Truth

// State is Read-Only

// Pure Functions to Change State (Reducers)

// 🔹 3. What are actions in Redux?

// Plain objects that describe what happened.

// Must have a type field.

// 🔹 4. What is a reducer?

// A pure function that receives state + action and returns a new state.

// No async, no API calls, no side effects.

// 🔹 5. What is the Redux store?

// A central place that holds the global state.

// Created using configureStore() in Redux Toolkit or createStore() in old Redux.

// 🔹 6. What is the use of dispatch?

// Sends an action to the reducer.

// dispatch({ type: "INCREMENT" })

// 🔹 7. What is useSelector and useDispatch?

// useSelector → read state from the store

// useDispatch → send actions to the store

// 🔹 8. What is Redux Thunk and why do we use it?

// Middleware to handle async logic (API calls).

// Allows returns of functions instead of objects:

// (dispatch) => { ... }

// 🔹 9. Why do we need middleware in Redux?

// To handle side effects like:

// API calls

// async operations

// logging

// auth token checks

// 🔹 10. Difference between Redux and Context API?
// Redux	Context API
// Good for large apps	Good for small apps
// Predictable using reducers	No strict structure
// Middlewares	No middlewares
// DevTools	Limited debugging
// 🔹 11. What is Redux Toolkit and why is it recommended?

// Official recommended way.

// Reduces boilerplate code.

// Includes:

// createSlice

// configureStore

// createAsyncThunk

// 🔹 12. What is createSlice?

// Combines actions + reducer in one place.

// Less code, more readable.

// 🔹 13. What is createAsyncThunk?

// Used for async operations (API calls):

// export const getUsers = createAsyncThunk("users/get", async () => {
//   const res = await fetch("/users");
//   return res.json();
// });

// 🔹 14. Why reducers must be pure functions?

// Because:

// They must return the same output for the same input.

// They cannot change original state.

// Helps in debugging & time-travel features.

// 🔹 15. What is immutability in Redux?

// You should not change the original state:
// ❌ state.count++
// ✔ return { ...state, count: state.count + 1 }

// Redux Toolkit uses Immer, so:
// ✔ state.count++ becomes safe.

// 🔹 16. What is the Redux flow? (very commonly asked)

// UI dispatches action

// Reducer updates store

// UI re-renders based on updated state

// 🔹 17. Can Redux work without React?

// Yes. Redux is a state management library, not React-specific.

// 🔹 18. What are slices in Redux Toolkit?

// Logical sections of the store.

// Example: userSlice, cartSlice.

// 🔹 19. What is the difference between redux-thunk and redux-saga?

// Beginners say:

// Thunk → simple async

// Saga → complex async (generators)

// 🔹 20. In which cases should we NOT use Redux?

// Small projects

// Apps with limited global state

// If Context API is enough

// 🎁 Bonus: SUPER Short Answer Versions (for quick revision)

// These are exactly how you answer in interviews.

// ✔ What is Redux?

// A predictable state management library used to manage global state.

// ✔ What is an action?

// A plain JS object describing what happened.

// ✔ What is a reducer?

// A pure function that updates state based on actions.

// ✔ What is Redux Toolkit?

// Official Redux framework to reduce boilerplate and simplify code.

// ✔ Why use Redux Thunk?

// To write async code like API calls in Redux.