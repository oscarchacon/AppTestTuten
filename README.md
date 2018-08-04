# AppTutenTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Componentes Utilizados

\n`bootstrap 4` -> `npm install --save bootstrap4`
\n`momentjs` -> `npm install --save moment`
\n`font awesome` -> `npm install --save font-awesome`
\n`ngx-bootstrap` -> `npm install --save ngx-bootstrap`
\n`rxjs-compat` -> `npm install --save rxjs-compat`
\n`rxjs` -> `npm install --save rxjs`

Agregar las siguientes lineas en `styles` del archivo `angular.json`
\n`"node_modules/bootstrap/dist/css/bootstrap.min.css"`
\n`"node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"`
\n`"node_modules/font-awesome/css/font-awesome.css"`

Usar angular/cli 6.0.8 y nodejs 10.0.7, junto con npm 6.2

## Consideraciones

El proyecto esta compuesto por la carpeta `componentes`
\nEn la cual tiene `_classes` : las clases que se utilizarán
\n`_services`: servicios utilizados
\n`_helpers` distintos componentes, como servicios, módulos, directivas
\n`pipes`: distinos pipes para hacer filtro o mostrar información correctamente
\n`booking-lista` y `user-login`: carpetas con componentes para el uso de la app.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
