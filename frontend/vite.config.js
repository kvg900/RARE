import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5178 },
  //   server: {
  //     hmr: {
  //       overlay: false
  //     }
  //   }
});
// export default {
//   server: {
//     hmr: {
//       overlay: false
//     }
//   }
// };
