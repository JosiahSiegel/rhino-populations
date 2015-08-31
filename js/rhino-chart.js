var callbacks = $.Callbacks("unique memory");callbacks.add( chart_globals );callbacks.add( donut_chart );callbacks.fire();function chart_globals() {  Chart.defaults.global = {      animation: true,      animationSteps: 60,      animationEasing: "easeOutQuart",      showScale: true,      scaleOverride: false,      scaleSteps: null,      scaleStepWidth: null,      scaleStartValue: null,      scaleLineColor: "rgba(0,0,0,0.0)",      scaleLineWidth: 1,      scaleShowLabels: false,      scaleLabel: "<%=value%>",      scaleIntegersOnly: true,      scaleBeginAtZero: false,      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",      scaleFontSize: 12,      scaleFontStyle: "normal",      scaleFontColor: "#666",      responsive: true,      maintainAspectRatio: true,      showTooltips: true,      customTooltips: false,      tooltipEvents: ["mousemove", "touchstart", "touchmove"],      tooltipFillColor: "rgba(0,0,0,0.8)",      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",      tooltipFontSize: 14,      tooltipFontStyle: "normal",      tooltipFontColor: "#fff",      tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",      tooltipTitleFontSize: 14,      tooltipTitleFontStyle: "bold",      tooltipTitleFontColor: "#fff",      tooltipYPadding: 6,      tooltipXPadding: 6,      tooltipCaretSize: 8,      tooltipCornerRadius: 6,      tooltipXOffset: 10,      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",      multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",      onAnimationProgress: function(){},      onAnimationComplete: function(){}  }}function donut_chart() {  $(".prev").hide();  var data = [      {          value: 5000,          color:"rgba(247,70,74,0.8)",          highlight: "rgba(255,90,94,0.8)",          label: "Black Rhino"      },      {          value: 3000,          color: "rgba(70,191,189,0.8)",          highlight: "rgba(90,211,209,0.8)",          label: "Indian Rhino"      },      {          value: 310,          color: "rgba(253,180,92,0.8)",          highlight: "rgba(255,200,112,0.8)",          label: "Javan & Sumatran Rhinos"      },      {          value: 20000,          color: "rgba(77,83,96,0.8)",          highlight: "rgba(97,103,116,0.8)",          label: "White Rhino"      }  ];  var options = {    animateScale: false,    segmentShowStroke : false,    segmentStrokeColor : "#fff",    segmentStrokeWidth : 2,    percentageInnerCutout : 70,    animationSteps : 40,    animationEasing : "easeOutBounce",    animateRotate : true,    onAnimationComplete: function(){},    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"  };  var ctx = $("#rhino-chart").get(0).getContext("2d");  var DonutChart = new Chart(ctx).Doughnut(data, options);  $("#rhino-chart").off('click').click(      function(evt){          var activePoints = DonutChart.getSegmentsAtEvent(evt);          var name = activePoints[0].label;          DonutChart.destroy();          $("#rhino-chart").off("click");          callbacks.empty();          switch(name) {              case "White Rhino":                  //window.location.href = "https://en.wikipedia.org/wiki/White_rhinoceros";                  callbacks.add( line_chart(name) );                  break;              case "Black Rhino":                  //window.location.href = "https://en.wikipedia.org/wiki/Black_rhinoceros";                  callbacks.add( line_chart(name) );                  break;              case "Indian Rhino":                  //window.location.href = "https://en.wikipedia.org/wiki/Indian_rhinoceros";                  callbacks.add( line_chart(name) );                  break;              case "Javan & Sumatran Rhinos":                  //window.location.href = "https://en.wikipedia.org/wiki/Javan_rhinoceros";                  callbacks.add( line_chart(name) );                  break;          }      }  );}function line_chart(name) {  $(".prev").show();  var data = {      labels: ["1960", "1970", "1980", "1990", "2000", "2010"]  };  switch(name) {      case "White Rhino":          var w_data =          {              datasets: [                  {                      label: "White Rhino",                      fillColor: "rgba(220,220,220,0.2)",                      strokeColor: "rgba(220,220,220,1)",                      pointColor: "rgba(220,220,220,1)",                      pointStrokeColor: "#fff",                      pointHighlightFill: "#fff",                      pointHighlightStroke: "rgba(220,220,220,1)",                      data: [2300, 4000, 8000, 12000, 16000, 20000]                  }              ]          };          $.extend( data, w_data );          break;      case "Black Rhino":          var b_data =          {              datasets: [                  {                      label: "Black Rhino",                      fillColor: "rgba(220,220,220,0.2)",                      strokeColor: "rgba(220,220,220,1)",                      pointColor: "rgba(220,220,220,1)",                      pointStrokeColor: "#fff",                      pointHighlightFill: "#fff",                      pointHighlightStroke: "rgba(220,220,220,1)",                      data: [100000, 67000, 35000, 3000, 4000, 5000]                  }              ]          };          $.extend( data, b_data );          break;      case "Indian Rhino":          var i_data =          {              datasets: [                  {                      label: "Indian Rhino",                      fillColor: "rgba(220,220,220,0.2)",                      strokeColor: "rgba(220,220,220,1)",                      pointColor: "rgba(220,220,220,1)",                      pointStrokeColor: "#fff",                      pointHighlightFill: "#fff",                      pointHighlightStroke: "rgba(220,220,220,1)",                      data: [600, 1080, 1560, 2040, 2520, 3000]                  }              ]          };          $.extend( data, i_data );          break;      case "Javan & Sumatran Rhinos":          var j_data =          {              datasets: [                  {                      label: "Sumatran Rhino",                      fillColor: "rgba(151,187,205,0.2)",                      strokeColor: "rgba(151,187,205,1)",                      pointColor: "rgba(151,187,205,1)",                      pointStrokeColor: "#fff",                      pointHighlightFill: "#fff",                      pointHighlightStroke: "rgba(151,187,205,1)",                      data: [170, 120, 280, 700, 300, 250]                  },                  {                      label: "Javan Rhino",                      fillColor: "rgba(220,220,220,0.2)",                      strokeColor: "rgba(220,220,220,1)",                      pointColor: "rgba(220,220,220,1)",                      pointStrokeColor: "#fff",                      pointHighlightFill: "#fff",                      pointHighlightStroke: "rgba(220,220,220,1)",                      data: [25, 35, 60, 50, 55, 60]                  }              ]          };          $.extend( data, j_data );          break;  }  var options =  {    animationSteps : 20,    scaleShowGridLines : false,    scaleGridLineColor : "rgba(0,0,0,.05)",    scaleGridLineWidth : 0,    scaleShowHorizontalLines: false,    scaleShowVerticalLines: false,    bezierCurve : true,    bezierCurveTension : 0.4,    pointDot : true,    pointDotRadius : 8,    pointDotStrokeWidth : 1,    pointHitDetectionRadius : 20,    datasetStroke : true,    datasetStrokeWidth : 2,    datasetFill : true,    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"  }  var ctx = $("#rhino-chart").get(0).getContext("2d");  var LineChart = new Chart(ctx).Line(data, options);  $(".prev").off('click').click(    function(){      $(".prev").off("click");      LineChart.destroy();      callbacks.empty();      callbacks.add( donut_chart );    }  );}