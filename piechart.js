function getIDMen(id) {

    btn_id = document.getElementById(id).id;
    string_id = btn_id.replace(/[0-9]/g, '');
    svg_title = "#svg" + string_id;
    updateDataMen();
}

function getIDWomen(id) {

    wbtn_id = document.getElementById(id).id;
    console.log(wbtn_id);
    wstring_id = wbtn_id.replace(/[0-9]/g, '');
    console.log(wstring_id);
    wsvg_title = "#svg" + wstring_id;
    updateDataWomen();
}

function updateDataMen() {

    var svg = d3.select(svg_title),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2;

    var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

    var pie = d3.pie().value(function(d) {
        return d.male;
    });

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


        console.log(arc)

        arc.append("text")
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .text(function(d) { return d.data.year; });
    });
}

function updateDataWomen() {

    var svg = d3.select(wsvg_title),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2;

    var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

    var pie = d3.pie().value(function(d) {
        return d.female;
    });

    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 80);

    var csv_path = "csv/men&women/" + wstring_id + "/" + wbtn_id + ".csv"

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


        console.log(arc)

        arc.append("text")
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .text(function(d) { return d.data.year; });
    });
}