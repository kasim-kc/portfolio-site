// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     headers: {
//       "Content-Type": "application/javascript",
//     },
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".ts", ".tsx"],
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
