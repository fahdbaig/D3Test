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


function JsonDraw()
{
    var path="http://ac32007.cloudapp.net:8080/Circles/Towns/20";
    
    d3.json(path,function (error,d)
    {
        if(error)
        {
            console.log(error);
        }
        //console.log(data);
        
        d3.select("body").selectAll("p").data(d).enter().append("p").text(function(d)
        {
          return "Town: " + d.Town;  
        });
    })
}
window.onload=JsonDraw;

