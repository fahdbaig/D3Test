function D3Draw()
{
    var dataset = [5,6,2,8,9];
    d3.select("body")
      .selectall("p")
      .enter()
      .append("p")        
      .text("Multiple text lines");
}

window.onload=D3Draw;
