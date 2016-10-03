function D3Draw()
{
    var dataset = [];
    d3.select("body").selectAll("p")      
      .data(dataset)
      .enter()
      .append("p")        
      .text(textWrite);
}

window.onload=D3Draw;

function textWrite(dd)
{
    return "This is text for line number " + dd;
}