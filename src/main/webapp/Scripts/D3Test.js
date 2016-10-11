/*function D3Draw()
{
    var dataset = [5,6,2,8,9];
    d3.select("body").selectAll("p")      
      .data(dataset)
      .enter()
      .append("p")        
      .text(function (dd)
          {
            return "This is text for line number " + dd;
          }
        );
}
*/

/*
function JsonDraw()
{
    var path="http://ac32007.cloudapp.net:8080/Circles/Towns/200";
    
    d3.json(path,function (error,d)
    {
        if(error)
        {
            console.log(error);
        }
        //console.log(data);
        
        d3.select("body").selectAll("p").data(d).enter().append("p").text(function(dd,index)
        {
          return "Town " + (index+1) + ": " + dd.Town;  
        });
    })
}
*/

function MapDraw()
{
    var width = 960;
    var height = 1160;

    var svg = d3.select("body").append("svg")
            .attr("width",width)
            .attr("height",height);
    
    var path = d3.geoPath();
        
    d3.json("Data/uk.json",function(error,uk)
    {
        if(error)
        {
            console.log(uk);
        }
        else
        {          
            svg.selectAll("path")
               .data(uk)
               .enter()
               .append("path")
               //.datum(topojson.feature(uk, uk.objects.subunits))
//               .datum(uk)
               //.attr("d", path.projection(d3.geoMercator().scale(8500).center(d3.geoCentroid(uk)).translate([width/2,height/2])));
               .attr("d", path);
        }
    });
}
window.onload=MapDraw;

