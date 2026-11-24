// Generate a self-contained vector screen from the local illustration and logos.
// Run from this project with: node scripts/build-vuelvo-screen.cjs
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const componentPath = path.join(
  root,
  "components/vuelvo-product-illustration.tsx",
);
const component = new Module(componentPath, module);
component.filename = componentPath;
component.paths = Module._nodeModulePaths(path.dirname(componentPath));
component._compile(
  ts.transpileModule(fs.readFileSync(componentPath, "utf8"), {
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
    },
  }).outputText,
  componentPath,
);
const publicPath = path.join(root, "public/productos");
const gesrest = fs.readFileSync(
  path.join(publicPath, "vuelvo_gesrest_blanco.svg"),
  "utf8",
);
const gesrestPaths = gesrest.slice(
  gesrest.indexOf(">", gesrest.indexOf("<svg")) + 1,
  gesrest.lastIndexOf("</svg>"),
);
const logo = fs.readFileSync(path.join(publicPath, "vuelvo_logo.svg"), "utf8");
const logoPaths = logo
  .slice(logo.indexOf(">") + 1, logo.lastIndexOf("</svg>"))
  .replaceAll("#2B1203", "#FFEEDD");
let scene = renderToStaticMarkup(
  React.createElement(component.exports.default),
);
scene = scene.replace("<svg ", '<svg x="16" y="236" width="358" height="533" ');
scene = scene.replace(
  /<image[^>]*href="\/productos\/vuelvo_gesrest_blanco\.svg"[^>]*>(?:<\/image>)?/,
  `<svg x="74" y="15" width="93" height="26" viewBox="129 469 942 262">${gesrestPaths}</svg>`,
);
if (scene.includes("<image"))
  throw new Error("The screen must embed all logos as vector paths.");
const screen = `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844" viewBox="0 0 390 844">
<title>Vuelvo+: venta registrada, visita sumada y cartillas digitales</title>
<rect width="390" height="844" fill="#1c1614"/>
<svg x="22" y="65" width="180" height="51" viewBox="0 0 355.3 100">${logoPaths}</svg>
<g font-family="Arial, sans-serif" font-size="13" font-weight="700">
<rect x="22" y="135" width="165" height="39" rx="19.5" fill="none" stroke="#49382e"/>
<text x="104" y="160" fill="#FFEEDD" text-anchor="middle">Ingresar al panel</text>
<rect x="198" y="135" width="170" height="39" rx="19.5" fill="#F97316"/>
<text x="283" y="160" fill="#2B1203" text-anchor="middle">Solicitar demo</text>
<rect x="60" y="183" width="65" height="32" rx="10" fill="#513019"/>
<text x="92" y="204" fill="#FFEEDD" text-anchor="middle">Inicio</text>
<text x="190" y="204" fill="#FFEEDD" text-anchor="middle">Nosotros</text>
<text x="298" y="204" fill="#FFEEDD" text-anchor="middle">Contacto</text>
</g>
<path d="M0 225H390" stroke="#3f2f26"/>
${scene}
<path d="M0 801H390" stroke="#3f2f26"/>
</svg>`;
fs.writeFileSync(path.join(publicPath, "vuelvo_pantalla.svg"), screen);
console.log("Generated self-contained Vuelvo+ screen (390 x 844).");
