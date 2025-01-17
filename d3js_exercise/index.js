import {} from "./d3.js"
const dashboard_html = `
<div class="div-data">
    <svg id="svg-apps" width="800" height="800"></svg>
    <div id="div-legend">
    <svg id="svg-legend" width="300" height="900"></svg>
    </div>
</div>

`
const dashboard_style = `
<style>
.node {
  cursor: pointer;
}

.node:hover {
  stroke: #000;
  stroke-width: 1.5px;
}

.node--leaf {
  fill: white;
}

.label {
  font: 11px "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-anchor: middle;
  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff;
}

.div-data{
    display: flex;
    flex-direction: row;
}

#div-legend{
    height: 300px;
    width: 300px;
    max-width 300px:
    max-height: 300px;
    overflow-y: auto;
    margin-top: 50px;
}

.label,
.node--root,
.node--leaf {
  pointer-events: none;
}
  </style>
`

export class D3Test extends HTMLElement {
    static get observedAttributes() { return [] }
    constructor(){

        super();

        this.controller = new AbortController()
        let tmpl = document.createElement('template');
        tmpl.innerHTML = (this.style_markup +this.html_markup);

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    get style_markup() { return dashboard_style }
    get html_markup() { return dashboard_html }
    

    connectedCallback() {
        // set the dimensions and margins of the graph
        var width = 800
        var height = 600

        // append the svg object to the body of the page
        var svg_canvas = this.shadowRoot.querySelector("#svg-apps")
        var svg_legend = this.shadowRoot.querySelector("#svg-legend")
        var svg = d3.select(svg_canvas),
        margin = 20,
        diameter = +svg.attr("width"),
        g = svg
            .append("g")
            .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")")

        // var color = d3
        // .scaleLinear()
        // .domain([-1, 5])
        // .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
        // .interpolate(d3.interpolateHcl);

        // d3.select(svg_canvas).call(d3.zoom().on("zoom", function () {svg.attr("transform", d3.event.transform)}))

        var color = d3.scaleOrdinal(d3.schemeCategory10)

        var pack = d3
        .pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);

        let root = {
            "name": "flare",
            "children": [
                {
                    "window_count": 52,
                    "spent_time": 54.216666666666676,
                    "index_id": 24859,
                    "user_id": 1423,
                    "size": 54.216666666666676,
                    "name": "PyCharm"
                },
                {
                    "window_count": 3,
                    "spent_time": 4.9,
                    "index_id": 99295,
                    "user_id": 1423,
                    "size": 4.9,
                    "name": "learnopencv.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.4,
                    "index_id": 99583,
                    "user_id": 1423,
                    "size": 0.4,
                    "name": "how to get only the tex"
                },
                {
                    "window_count": 14,
                    "spent_time": 3.6999999999999997,
                    "index_id": 95079,
                    "user_id": 1423,
                    "size": 3.6999999999999997,
                    "name": "explorer.exe"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.03333333333333333,
                    "index_id": 99584,
                    "user_id": 1423,
                    "size": 0.03333333333333333,
                    "name": "how to get only the text part of the added text in I"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.08333333333333333,
                    "index_id": 99585,
                    "user_id": 1423,
                    "size": 0.08333333333333333,
                    "name": "how to get only the text part of the added text in ImageDraw python"
                },
                {
                    "window_count": 47,
                    "spent_time": 32.73333333333334,
                    "index_id": 178,
                    "user_id": 1423,
                    "size": 32.73333333333334,
                    "name": "bing.com"
                },
                {
                    "window_count": 28,
                    "spent_time": 9.850000000000001,
                    "index_id": 2,
                    "user_id": 1423,
                    "size": 9.850000000000001,
                    "name": "Skype"
                },
                {
                    "window_count": 4,
                    "spent_time": 6.133333333333333,
                    "index_id": 82102,
                    "user_id": 1423,
                    "size": 6.133333333333333,
                    "name": "pillow.readthedocs.io"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.18333333333333332,
                    "index_id": 99588,
                    "user_id": 1423,
                    "size": 0.18333333333333332,
                    "name": "devo"
                },
                {
                    "window_count": 10,
                    "spent_time": 3.1333333333333337,
                    "index_id": 96568,
                    "user_id": 1423,
                    "size": 3.1333333333333337,
                    "name": "devops.cloudica.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.3333333333333333,
                    "index_id": 99589,
                    "user_id": 1423,
                    "size": 0.3333333333333333,
                    "name": "cloudica.om:"
                },
                {
                    "window_count": 4,
                    "spent_time": 2.683333333333333,
                    "index_id": 174,
                    "user_id": 1423,
                    "size": 2.683333333333333,
                    "name": "cloudica.com:8888"
                },
                {
                    "window_count": 31,
                    "spent_time": 27.583333333333336,
                    "index_id": 28726,
                    "user_id": 1423,
                    "size": 27.583333333333336,
                    "name": "stackoverflow.com"
                },
                {
                    "window_count": 16,
                    "spent_time": 13.033333333333333,
                    "index_id": 12272,
                    "user_id": 1423,
                    "size": 13.033333333333333,
                    "name": "geeksforgeeks.org"
                },
                {
                    "window_count": 7,
                    "spent_time": 1.5666666666666667,
                    "index_id": 13,
                    "user_id": 1423,
                    "size": 1.5666666666666667,
                    "name": "Python"
                },
                {
                    "window_count": 5,
                    "spent_time": 2.4,
                    "index_id": 199,
                    "user_id": 1423,
                    "size": 2.4,
                    "name": "storage.googleapis.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.25,
                    "index_id": 99596,
                    "user_id": 1423,
                    "size": 0.25,
                    "name": "dev_ap1.cloudica.com"
                },
                {
                    "window_count": 3,
                    "spent_time": 1.6,
                    "index_id": 177,
                    "user_id": 1423,
                    "size": 1.6,
                    "name": "dev_api1.cloudica.com"
                },
                {
                    "window_count": 7,
                    "spent_time": 2.283333333333333,
                    "index_id": 20170,
                    "user_id": 1423,
                    "size": 2.283333333333333,
                    "name": "Microsoft Edge"
                },
                {
                    "window_count": 3,
                    "spent_time": 10.866666666666667,
                    "index_id": 68264,
                    "user_id": 1423,
                    "size": 10.866666666666667,
                    "name": "pyimagesearch.com"
                },
                {
                    "window_count": 3,
                    "spent_time": 1.1500000000000001,
                    "index_id": 3960,
                    "user_id": 1423,
                    "size": 1.1500000000000001,
                    "name": "blog.finxter.com"
                },
                {
                    "window_count": 2,
                    "spent_time": 0.2,
                    "index_id": 95047,
                    "user_id": 1423,
                    "size": 0.2,
                    "name": "Microsoft Calculator"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.5,
                    "index_id": 187,
                    "user_id": 1423,
                    "size": 0.5,
                    "name": "app.netdata.cloud"
                },
                {
                    "window_count": 19,
                    "spent_time": 38.96666666666667,
                    "index_id": 18,
                    "user_id": 1423,
                    "size": 38.96666666666667,
                    "name": "udemy.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.3333333333333333,
                    "index_id": 20183,
                    "user_id": 1423,
                    "size": 0.3333333333333333,
                    "name": "Microsoft StickyNotes"
                },
                {
                    "window_count": 2,
                    "spent_time": 0.2833333333333333,
                    "index_id": 252,
                    "user_id": 1423,
                    "size": 0.2833333333333333,
                    "name": "accounts.google.com"
                },
                {
                    "window_count": 94,
                    "spent_time": 98.93333333333335,
                    "index_id": 32631,
                    "user_id": 1423,
                    "size": 98.93333333333335,
                    "name": "Visual Studio Code"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.25,
                    "index_id": 99603,
                    "user_id": 1423,
                    "size": 0.25,
                    "name": "login usi"
                },
                {
                    "window_count": 21,
                    "spent_time": 92.45,
                    "index_id": 12957,
                    "user_id": 1423,
                    "size": 92.45,
                    "name": "Google Chrome"
                },
                {
                    "window_count": 9,
                    "spent_time": 3.833333333333333,
                    "index_id": 1,
                    "user_id": 1423,
                    "size": 3.833333333333333,
                    "name": "cloudica.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.3333333333333333,
                    "index_id": 6221,
                    "user_id": 1423,
                    "size": 0.3333333333333333,
                    "name": "cloudica"
                },
                {
                    "window_count": 3,
                    "spent_time": 0.4666666666666667,
                    "index_id": 19178,
                    "user_id": 1423,
                    "size": 0.4666666666666667,
                    "name": "mail.google.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.25,
                    "index_id": 33696,
                    "user_id": 1423,
                    "size": 0.25,
                    "name": "WindowsTerminal.exe"
                },
                {
                    "window_count": 37,
                    "spent_time": 26.15,
                    "index_id": 18431,
                    "user_id": 1423,
                    "size": 26.15,
                    "name": "live-monitor-v2"
                },
                {
                    "window_count": 16,
                    "spent_time": 16.53333333333333,
                    "index_id": 70683,
                    "user_id": 1423,
                    "size": 16.53333333333333,
                    "name": "d3-graph-gallery.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.16666666666666666,
                    "index_id": 99616,
                    "user_id": 1423,
                    "size": 0.16666666666666666,
                    "name": "implement bubble chart"
                },
                {
                    "window_count": 1,
                    "spent_time": 1,
                    "index_id": 13036,
                    "user_id": 1423,
                    "size": 1,
                    "name": "google.com"
                },
                {
                    "window_count": 29,
                    "spent_time": 12.25,
                    "index_id": 205,
                    "user_id": 1423,
                    "size": 12.25,
                    "name": "devtools:"
                },
                {
                    "window_count": 6,
                    "spent_time": 2.15,
                    "index_id": 21228,
                    "user_id": 1423,
                    "size": 2.15,
                    "name": "MySQL Workbench"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.03333333333333333,
                    "index_id": 28546,
                    "user_id": 1423,
                    "size": 0.03333333333333333,
                    "name": "Spotify"
                },
                {
                    "window_count": 27,
                    "spent_time": 28.683333333333337,
                    "index_id": 258,
                    "user_id": 1423,
                    "size": 28.683333333333337,
                    "name": "youtube.com"
                },
                {
                    "window_count": 2,
                    "spent_time": 0.33333333333333337,
                    "index_id": 181,
                    "user_id": 1423,
                    "size": 0.33333333333333337,
                    "name": "eportal.hrcenter.com"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.36666666666666664,
                    "index_id": 99627,
                    "user_id": 1423,
                    "size": 0.36666666666666664,
                    "name": "basic circle pack"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.35,
                    "index_id": 99629,
                    "user_id": 1423,
                    "size": 0.35,
                    "name": "adding text inside cie"
                },
                {
                    "window_count": 2,
                    "spent_time": 0.5,
                    "index_id": 99630,
                    "user_id": 1423,
                    "size": 0.5,
                    "name": "jonathansoma.com"
                },
                {
                    "window_count": 8,
                    "spent_time": 8.416666666666668,
                    "index_id": 74949,
                    "user_id": 1423,
                    "size": 8.416666666666668,
                    "name": "using-d3js.com"
                },
                {
                    "window_count": 4,
                    "spent_time": 6.733333333333333,
                    "index_id": 12638,
                    "user_id": 1423,
                    "size": 6.733333333333333,
                    "name": "github.com"
                },
                {
                    "window_count": 7,
                    "spent_time": 3,
                    "index_id": 7625,
                    "user_id": 1423,
                    "size": 3,
                    "name": "d3js.org"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.5,
                    "index_id": 10080,
                    "user_id": 1423,
                    "size": 0.5,
                    "name": "en.wikipedia.org"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.18333333333333332,
                    "index_id": 95080,
                    "user_id": 1423,
                    "size": 0.18333333333333332,
                    "name": "ShellExperienceHost.exe"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.25,
                    "index_id": 99643,
                    "user_id": 1423,
                    "size": 0.25,
                    "name": "d3.packsiblings synta"
                },
                {
                    "window_count": 4,
                    "spent_time": 2.1,
                    "index_id": 72747,
                    "user_id": 1423,
                    "size": 2.1,
                    "name": "snyk.io"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.2,
                    "index_id": 1090,
                    "user_id": 1423,
                    "size": 0.2,
                    "name": "addin"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.5,
                    "index_id": 32861,
                    "user_id": 1423,
                    "size": 0.5,
                    "name": "w3.org"
                },
                {
                    "window_count": 1,
                    "spent_time": 0.25,
                    "index_id": 99670,
                    "user_id": 1423,
                    "size": 0.25,
                    "name": "get the center of text in d3 js"
                },
                {
                    "window_count": 2,
                    "spent_time": 5.683333333333334,
                    "index_id": 19878,
                    "user_id": 1423,
                    "size": 5.683333333333334,
                    "name": "medium.com"
                }
            ]
        }
                        
            root = d3
              .hierarchy(root)
              .sum(function (d) {
                return d.size;
              })
              .sort(function (a, b) {
                return b.value - a.value;
              });
          
            var focus = root,
              nodes = pack(root).descendants(),
              view;

            console.log(nodes)
          
            var circle = g
              .selectAll("circle")
              .data(nodes)
              .enter()
              .append("circle")
              .attr("class", "node")
              .style("fill", function (d, i) {

                return d.depth ? color(d.r) : "white";
              })
              .on("click", function (d) {
                if (focus !== d){
                    zoom(d), d3.event.stopPropagation();
                } 
              });

          
            var text = g
              .selectAll("text")
              .data(nodes)
              .enter()
              .append("text")
              .attr("class", "label")
              .attr("app-name", function (d) {
                return d.data.name;
              })
              .style("fill-opacity", function (d) {
                return d.parent === root ? 1 : 0;
              })
              .text(function (d) {
                return d.data.name;
              })
          
            var node = g.selectAll("circle,text");
          
            svg.on("click", function () {
              zoom(root);
            });
          
            zoomTo([root.x, root.y, root.r * 2 + margin]);
            console.log(root)
          
            function zoom(d) {
              var focus0 = focus;
              focus = d;
              console.log(view)
          
              var transition = d3
                .transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .tween("zoom", function (d) {
                  var i = d3.interpolateZoom(view, [
                    focus.x,
                    focus.y,
                    focus.r * 2 + margin
                  ]);
                  return function (t) {
                    zoomTo(i(t));
                  };
                });
          
              transition
                .selectAll("text")
                .filter(function (d) {
                  return d.parent === focus || this.style.display === "inline";
                })
                .style("fill-opacity", function (d) {
                  return d.parent === focus ? 1 : 0;
                })
                .on("start", function (d) {
                  if (d.parent === focus) this.style.display = "inline";
                })
                .on("end", function (d) {
                  if (d.parent !== focus) this.style.display = "none";
                });
            }

            
          
            function zoomTo(v) {
              var k = diameter / v[2];
              view = v;
              node.attr("transform", function (d) {
                return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
              });
              circle.attr("r", function (d) {
                let circles = document.querySelector("body > d3-test").shadowRoot.querySelectorAll(`.label`)
                circles.forEach(function(e){
                    let app_name = e.getAttribute("app-name")
                    if(app_name == d.data.name){
                        // console.log(e.innerHTML)
                        // console.log(`${e.innerHTML.length} - ${((d.r * k) * 0.5)}`)
                        if(((d.r * k) * 0.5) < d.data.name.length){
                            console.log("clip text")
                            e.innerHTML = d.data.name.substring(0, Math.round(((d.r * k) * 0.3)))
                        }
                        else{
                            e.innerHTML = d.data.name
                        }
                    }
                })
                // console.log(`r: ${d.r * k}`)
                return d.r * k;
              });
            }

            let scrollDistance = 0;

            function updateScrollPosition(diff){
                console.log(`diff ${diff}`)
                if(diff > 0)
                    scrollDistance -= 10;
                else{
                    scrollDistance += 10;
                }
                scrollDistance = scrollDistance > 0 ? 0 : scrollDistance

                legends.attr('transform', `translate(0,${scrollDistance})`)
            }

            var svg_legend_data = d3.select(svg_legend)
            // .attr("transform", d => `translate(0, ${100 - 800})`)
            // .on("wheel", (e) => {updateScrollPosition(d3.event.deltaY)})

            var legends = svg_legend_data.selectAll('g')
            .data(nodes)
            .enter()
            .append("g")

            var legent_rects = legends.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("x", 10)
            .attr("y", (_, i) => {return (i * 15)})
            .style("fill", (d,i)=>{return color(d.r)})
            .style("display", function(d){
                return d.parent ? "inline" : "none";
            })

            legends.append("text")
                .attr("x", 30)
                .attr("y", (_, i) => {return (i * 15)+10})
                .style("font-size", ".8em")
                .style("display", function(d){
                    return d.parent ? "inline" : "none";
                })
                .text((d) => {
                    let app_name = d.data.name
                    return app_name})
                .style("text-anchor", "start")

        
                // bubbles.append("text")
                // .attr("dy", "-0.4em")
                // .style("text-anchor", "middle")
                // .append("tspan")
                // .attr("class", "country")
                // .text(d => d.data.Country)
                // .append("tspan")
                // .attr("class", "population")
                // .attr("x", 0)
                // .attr("dy", "1.2em")
                // .text(d => d.data.Population.toLocaleString());
    }

    disconnectedCallback() { }
}


if(document.createElement('d3-test').constructor.__proto__ !== HTMLElement) 
    window.customElements.define('d3-test', D3Test);


export class TestElement extends HTMLElement {
    static get observedAttributes() { return ['app-name'] }
    constructor(){

        super();

        this.controller = new AbortController()
        let tmpl = document.createElement('template');
        tmpl.innerHTML = (this.style_markup +this.html_markup);

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    get style_markup() { return `
        <style>
            span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        </style>` }
    get html_markup() { return `
        <div><span class="app-name"></span></div>
        
        ` }

    connectedCallback() {
    }

    disconnectedCallback() { }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(oldVal === newVal) return;

        this.shadowRoot.querySelector(".app-name").innerHTML = newVal
    }
}


if(document.createElement('test-element').constructor.__proto__ !== HTMLElement) 
    window.customElements.define('test-element', TestElement);