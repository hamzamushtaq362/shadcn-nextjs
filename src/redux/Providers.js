// src/store/Providers.js
"use client"; // This is a Client Component

import { Provider } from "react-redux";
import { store } from "./store";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
