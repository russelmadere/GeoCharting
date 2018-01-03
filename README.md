# GeoCharting

An AngularJS based library to create geologic data charts.

## Introduction

This project is intended to be a library, based upon AngularJS, to allow for the graphical display 
of geologic data on the web. It generates an embedded SVG file. Currently, only a ternary plot chart 
is generated, but other charts will be added as the code base grows.

## Ternary Plots

![Ternary Plot Sample Image](https://github.com/russelmadere/GeoCharting/example/sample.jpg)

A ternary ploy, also know as a Gibbs triangle or  de Finetti diagram, is a plot where there are three 
variables in a measured system. For example, the chemical composition of feldspar mineral is based 
upon the Sodium (Na), Calcium (Ca) and Potassium (K) composition of the mineral. The chemical analysis 
of each element can be plotted on a ternary plot which will produce a smooth series from Calcium to 
Sodium to Potassium. There is not series between Calcium and Potassium due to the two endpoints being 
immiscible. 

### Usage

To use the library to create a ternary plot, simply reference the library in the script section of your 
page and inject the geoCharting library into your application instantiation. on your page, include a div 
that references the ternaryPlot directive. In your application controller, inject the chartSettingsService
to have the ability to override the default chart settings and add your data to an array of objects
(defined below) that is referenced in the directive call.

```html
    <div data-ternary-plot="" 
         data-svg-id="svgImage" 
         data-chart-id="svgChart" 
         data-size="600" 
         data-padding="50" 
         data-show-thirds-intervals="true" 
         data-show-tenths-intervals="true" 
         data-chart-data="main.data"></div>

```

**Directive Attributes:**

* ternary-plot - The directive reference
* svg-id - The id of the image that will be created. Used to create the chart and display it on the page.
* chart-id - The id of the chart, inside the image that will be created. Used to modify the chart itself.
* size - The size of the chart itself in pixels.
* padding - The padding, in pixels, around the chart.
* show-thirds-intervals - A flag on whether or not to show the 1/3 intervals on the chart.
* show-tenths-interval - A flag on whether or not to show the 1/10 intervals on the chart.
* chart-data - The controller variable containing the data points to plot. See the object structure below. Pass in the *form controller_name.variable_name*.

### Ternary Data Object

* a - The value for the upper measurement (numeric)
* b - The value for the lower right measurement (numeric)
* c - The value for the lower left measurement (numeric)
* color - The html color for the marker fill (text)
* symbol - The name of the marker symbol as defined in the chart settings. Can be overridden or added to. (text)
* label - A label for the marker. Usually a sample name or other identifying note. (text)

```javascript
            var self = this;
    
            self.data = [];
    
            self.data.push({a: 81, b: 63, c: 6, color: 'green', symbol: 'triangle', label: '83-24' });
            self.data.push({a: 72, b: 73, c: 4, color: 'cyan', symbol: 'hexagon', label: '83-26'});
            self.data.push({a: 45, b: 96, c: 9, color: 'blue', symbol: 'square', label: '83-27' });
            self.data.push({a: 45, b: 76, c: 29, color: 'orange', symbol: 'diamond', label: '83-33' });
```

## Planned Expansions

* Scatter Chart
  * Without best fit
  * With best fit line
  * With best fit exponent
  * With best fit second order polynomial
* Line Chart
* Other charts to be determined
