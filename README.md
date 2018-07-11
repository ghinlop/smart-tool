#Ghinlop SmartTool - version 2.3.0
Smart Tool help compiles for EJS, Nunjucks, PUG engine and Scss

##Changelog
- Add compile engines:
    - EJS
    - Nunjucks
    - PUG
- Add Compile for SCSS to CSS
- Optimization for CSS after compiler SCSS by PostCSS plugin:
    - Autoprefixer
    - Mqpacker
- Support minify css by CSSNano
- Support config info with info.json in project folder
- Add Browser-sync and reload when css or engine compile success
- Support add default folder & file for new project

##Script Run Task

###Run Css Compile
```npm
yarn css --n [name-project]
```
###Run Engine Compile
```npm
yarn html --n [name-project]
```
###Run new Compile
```npm
yarn new --n [name-project]
```
###Run new Compile
```npm
yarn new --n [name-project]
```
###Run Server
```npm
yarn server --n [name-project]
```