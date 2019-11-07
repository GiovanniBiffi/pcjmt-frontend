# pcjmt-frontend
 Teste prático Desenvolvedor Front End - Polícia Judiciária Civil do Estado de Mato Grosso

# Versão Angular
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.4.10
node: 8.11.2
os: win32 x64
@angular/animations: 4.4.7
@angular/common: 4.4.7
@angular/compiler: 4.4.7
@angular/core: 4.4.7
@angular/forms: 4.4.7
@angular/http: 4.4.7
@angular/platform-browser: 4.4.7
@angular/platform-browser-dynamic: 4.4.7
@angular/router: 4.4.7
@angular/cli: 1.4.10
@angular/compiler-cli: 4.4.7
@angular/language-service: 4.4.7
typescript: 2.3.4

# Complementos instalados
npm install bootstrap@4.0.0-beta.2 popper.js jquery --save
npm install font-awesome@4.7.0 -s
npm install stacktrace-js -S
npm install @types/stacktrace-js
npm install cross-env@5.0.1 --save-dev
npm install css-loader@0.28.4 style-loader@0.18.2 --save-dev
npm install url-loader@0.5.9 file-loader@0.11.2 --save-dev
npm install extract-text-webpack-plugin@3.0.0 --save-dev
npm install html-webpack-plugin@2.29.0 --save-dev
npm install rxjs@5.5.2 --save

# Configurações adicionais no .angular-cli.json
## Linha 21
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "../node_modules/font-awesome/css/font-awesome.min.css"
],
"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/popper.js/dist/umd/popper.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
]