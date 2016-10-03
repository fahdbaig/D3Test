function D3Draw()
{
    var dataset = [5,6,2,8,9];
    d3.select("body").selectAll("p")      
      .data(dataset)
      .enter()
      .append("p")        
      .text(textWrite(dd));
}

window.onload=D3Draw;

function textWrite(dd)
{
    return "This is text for line number " + dd;
}