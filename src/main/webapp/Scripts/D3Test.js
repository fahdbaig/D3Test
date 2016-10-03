function D3Draw()
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

window.onload=D3Draw;

