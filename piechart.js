document.addEventListener("DOMContentLoaded", function() {
    getID('women2012');
});

function getID(id) {

    btn_id = document.getElementById(id).id;
    string_id = btn_id.replace(/[0-9]/g, '');
    svg_title = "#svg" + string_id;
    chart_title = document.getElementById(id).value
    clearChart();
    updateData();
}

function clearChart() {
    svg = d3.select(svg_title);
    svg.selectAll("*").remove();
}

function updateData() {

    var svg = d3.select(svg_title),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2;

    var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

    var pie = d3.pie().value(function(d) {
        if (string_id == "men") {
            return d.male;
        } else {
            return d.female
        }
    });


    var title = svg.append("text")
        .attr("x", width / 2)
        .attr("y", 10)
        .style("text-anchor", "middle")
        .text(chart_title);

    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 80);

    var csv_path = "csv/men&women/" + string_id + "/" + btn_id + ".csv"

    d3.csv(csv_path, function(error, data) {
        if (error) {
            throw error;
        }
        var arc = g.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d) { return color(d.data.year); });

        arc.append("text")
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .text(function(d) { return d.data.year; });

    });
}