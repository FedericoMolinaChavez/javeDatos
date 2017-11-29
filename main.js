var chart = dc.barChart("#test");
d3.csv("dats.csv", function(error, experiments) {
  experiments.forEach(function(d) {
        d.Timestamp = new Date(d.Timestamp);
    });
  var ndx  = crossfilter(experiments)
  chartdim = ndx.dimension(function(d) { return d["Retirement"]; });
  var chartTypeGroup = chartdim.group();

    chart
        .dimension(chartdim)
        .group(chartTypeGroup)
        .elasticX(true);
    dc.renderAll();
});


