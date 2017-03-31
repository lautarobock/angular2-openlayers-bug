# Step to reproduce bug

```
$ git clone https://github.com/lautarobock/angular2-openlayers-bug.git
$ cd angular2-openlayers-bug
$ npm install
$ ng build

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/map.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/attribution.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/control.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/default.component.d.ts (9,25): Cannot find namespace 'olx'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/default.component.d.ts (11,20): Cannot find namespace 'olx'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/default.component.d.ts (13,18): Cannot find namespace 'olx'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/default.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/fullscreen.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/mouseposition.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/overviewmap.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/rotate.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/scaleline.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/zoom.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/zoomslider.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/controls/zoomtoextent.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/formats/format.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/formats/mvt.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/default.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/doubleclickzoom.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/draganddrop.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/dragbox.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/dragpan.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/dragrotate.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/dragrotateandzoom.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/interactions/dragzoom.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/layers/layer.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/layers/layertile.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/layers/layervector.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/layers/layervectortile.component.d.ts (9,29): Cannot find namespace 'ol'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/layers/layervectortile.component.d.ts (9,51): Cannot find namespace 'ol'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/layers/layervectortile.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/source.component.d.ts (5,26): Cannot find namespace 'ol'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/source.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/bingmaps.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/osm.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/vector.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/tilegrid.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/vectortile.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/sources/xyz.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/feature.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/styles/style.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/styles/circle.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/styles/text.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/styles/fill.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/styles/icon.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/styles/stroke.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/attribution.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/attributions.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/geometry.components.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/view.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

ERROR in C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/overlay.component.d.ts (18,23): Cannot find namespace 'olx'.
C:/Dev/WebDocuments/Field/testWithMap/node_modules/angular2-openlayers/dist/components/overlay.component.d.ts (1,1): Cannot find type definition file for 'openlayers'.

```

# TestWithMap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
