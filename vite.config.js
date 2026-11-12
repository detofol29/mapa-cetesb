import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function subpaginasLegais() {
  const rewrite = (req, _res, next) => {
    if (req.url) {
      const [pathname, search = ""] = req.url.split("?");
      if (pathname === "/privacidade" || pathname === "/privacidade/") {
        req.url = "/privacidade/index.html" + (search ? `?${search}` : "");
      } else if (pathname === "/termos" || pathname === "/termos/") {
        req.url = "/termos/index.html" + (search ? `?${search}` : "");
      }
    }
    next();
  };
  return {
    name: "subpaginas-legais",
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

// base relativa: o dist/ funciona em qualquer pasta de qualquer hospedagem estática
export default defineConfig({
  base: "./",
  plugins: [subpaginasLegais(), react()],
});
