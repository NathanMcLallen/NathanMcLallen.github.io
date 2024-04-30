// mypath = "/my_examples/1cdw/1cdwRESULTS.csv";
// mypath = "/my_examples/1uwh/1uwhRESULTS.csv";
// mypath = "/my_examples/6vw1/6vw1RESULTS.csv";


  function myExamplePlot1(){
    makePlots("/my_examples/1cdw/1cdwRESULTS.csv");
  }
  
  function myExamplePlot2(){
    makePlots("/my_examples/1uwh/1uwhRESULTS.csv");
  }


  function myExamplePlot3(){
    makePlots("/my_examples/6vw1/6vw1RESULTS.csv");
  }


  function makePlots(path) {
  mypath = path;
  
  d3.csv(mypath, function(err, rows){
  
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  
  var trace1 = {
    x: unpack(rows, 'pos_ref'),
    close: unpack(rows, 'KLdivergence'),
    high: unpack(rows, 'zero_line'),
    low: unpack(rows, 'KLdivergence'),
    open: unpack(rows, 'zero_line'),
            
    // cutomise colors
    increasing: {line: {color: 'red'}},
    decreasing: {line: {color: 'blue'}},
  
    type: 'candlestick',
    xaxis: 'x', 
    yaxis: 'y',
      
  };
  
  var data1 = [trace1];
  
  var layout1 = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
      autorange: true,
      title: 'position on amino acid sequence',
     rangeselector: {
          x: 0,
          y: 1.2,
          xanchor: 'left',
          font: {size:8},
          
        }
    },
    yaxis: {
      autorange: true,
    }
  };
  
  Plotly.newPlot('myPlot1', data1, layout1);
  
  
  
  var trace2 = {
    x: unpack(rows, 'pos_ref'),
    close: unpack(rows, 'd_color'),
    high: unpack(rows, 'd_value'),
    low: unpack(rows, 'd_color'),
    open: unpack(rows, 'zero_line'),
            
    // cutomise colors
    increasing: {line: {color: 'orange'}},
    decreasing: {line: {color: 'black'}},
  
    type: 'candlestick',
    xaxis: 'x', 
    yaxis: 'y',
      
  };
  
  var data2 = [trace2];
  
  var layout2 = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
      autorange: true,
      title: 'position on amino acid sequence',
     rangeselector: {
          x: 0,
          y: 1.2,
          xanchor: 'left',
          font: {size:8},
          
        }
    },
    yaxis: {
      autorange: true,
    }
  };
  
  Plotly.newPlot('myPlot2', data2, layout2);
  
  
  var trace3 = {
    x: unpack(rows, 'pos_ref'),
    close: unpack(rows, 'flux_query_avg'),
    high: unpack(rows, 'KL_upper'),
    low: unpack(rows, 'KL_lower'),
    open: unpack(rows, 'flux_ref_avg'),
    
                  
    // cutomise colors
    increasing: {line: {color: 'red'}},
    decreasing: {line: {color: 'blue'}},
  
    type: 'candlestick',
    xaxis: 'x', 
    yaxis: 'y',
      
  };
  
  var data3 = [trace3];
  
  var layout3 = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
      autorange: true,
      title: 'position on amino acid sequence',
     rangeselector: {
          x: 0,
          y: 1.2,
          xanchor: 'left',
          font: {size:8},
          
        }
    },
    yaxis: {
      autorange: true,
    }
  };
  
  Plotly.newPlot('myPlot3', data3, layout3);
  });
  }
  
  