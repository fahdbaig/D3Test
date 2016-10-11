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
    var width = 500;
    var height = 300;

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
               .attr("d", path.projection(d3.geo.mercatorProjection().scale(150).center(d3.geo.centroid(uk)).translate([width/2,height/2])));
               //.attr("d", path);
        }
    });
}
window.onload=MapDraw;

