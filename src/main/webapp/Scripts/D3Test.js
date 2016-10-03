function D3Draw()
{
    d3.select("body").append("p").text("D3 text from JS file");
}

window.onload=d3Draw;
