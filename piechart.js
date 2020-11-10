function updateData() {

    var svg = d3.select("#svgmen"),
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

    d3.csv("csv/men&women/men/men2012.csv", function(error, data) {
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

function getId(id) {

    btn_id = document.getElementById(id).value;
    updateData2();

}


function updateData2() {

    var svg = d3.select("svg"),
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

    var csv_path = "csv/men&women/men/" + btn_id + ".csv"

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

function updateData3() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/men/men2014.csv", function(error, data) {
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

function updateData4() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/men/men2015.csv", function(error, data) {
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

function updateData5() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/men/men2016.csv", function(error, data) {
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

function updateData6() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/men/men2017.csv", function(error, data) {
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

function updateData7() {

    var svg = d3.select("#svgwomen"),
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

    d3.csv("csv/men&women/women/women2012.csv", function(error, data) {
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

function updateData8() {

    var svg = d3.select("#svgwomen"),
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

    d3.csv("csv/men&women/women/women2013.csv", function(error, data) {
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

function updateData9() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/women/women2014.csv", function(error, data) {
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

function updateData10() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/women/women2015.csv", function(error, data) {
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

function updateData11() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/women/women2016.csv", function(error, data) {
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

function updateData12() {

    var svg = d3.select("svg"),
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

    d3.csv("csv/men&women/women/women2017.csv", function(error, data) {
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