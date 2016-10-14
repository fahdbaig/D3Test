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
function UKMapRenderer(numberOfTowns)
{
    var numberOfTowns = 2;
    LoadTownsData(numberOfTowns);    
}
function LoadTownsData(numberOfTowns)
{    
    var townsPath = "http://ac32007.cloudapp.net:8080/Circles/Towns/" + numberOfTowns;
    d3.json(townsPath, 
        function(error, tData)
        {
            if(error)
            {
                console.log("ERROR: Unable to connect to towns' server.");
            }
            else
            {
                console.log(tData);
                MapDraw(tData)
            }
        }
    );  
}
function MapDraw(townsData)
{
    var height = 800;
    var width = 600;

    
    var svg = d3.select("body").append("svg")
            .attr("width",width)
            .attr("height",height);
      
    console.log(townsData);
    d3.select("body").selectAll("p").data(townsData).enter().append("p").text(function(dd,index)
    {
      return "Town " + (index+1) + ": " + dd.Town;  
    });
    
    d3.json("Data/uk.json",function(error,uk)
    {
        if(error)
        {
            console.log(uk);
        }
        else
        {
            /*var projection = d3.geoMercator()
                               .scale(1500)
                               .center(d3.geoCentroid(uk))
                               .translate([width/2,height/2]);
            */
           var projection = d3.geoAlbers()
                              .center([0,55,4])
                              .rotate([4.4,0])
                              .parallels([50,60])
                              .scale(4000)
                              .translate([width/2,height/2]);
            var path = d3.geoPath()
                         .projection(projection);
            
            svg.selectAll("path")
               .data(uk.features)
               .enter()
               .append("path")
               .attr("d", path);
        }
    });
}
window.onload=UKMapRenderer;


























































































































