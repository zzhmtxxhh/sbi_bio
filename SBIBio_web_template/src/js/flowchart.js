//<----------------------------------------Custom shape----------------------------------->//
function BoxShape()
{
  mxCylinder.call(this);
};
/*
    The next lines use an mxCylinder instance to augment the
    prototype of the shape ("inheritance") and reset the
    constructor to the topmost function of the c'tor chain.
*/
mxUtils.extend(BoxShape, mxCylinder);
// Defines the extrusion of the box as a "static class variable"
BoxShape.prototype.extrude = 10;
/*
    Next, the mxCylinder's redrawPath method is "overridden".
    This method has a isForeground argument to separate two
    paths, one for the background (which must be closed and
    might be filled) and one for the foreground, which is
    just a stroke.

     Foreground:       /
                 _____/
                      |
                      |
                   ____
     Background:  /    |
                 /     |
                 |     /
                 |____/
*/
BoxShape.prototype.redrawPath = function(path, x, y, w, h, isForeground)
{
  var dy = this.extrude * this.scale;
  var dx = this.extrude * this.scale;
  if (isForeground)
  {
    path.moveTo(0, dy);
    path.lineTo(w - dx, dy);
    path.lineTo(w, 0);
    path.moveTo(w - dx, dy);
    path.lineTo(w - dx, h);
  }
  else
  {
    path.moveTo(0, dy);
    path.lineTo(dx, 0);
    path.lineTo(w, 0);
    path.lineTo(w, h - dy);
    path.lineTo(w - dx, h);
    path.lineTo(0, h);
    path.lineTo(0, dy);
    path.lineTo(dx, 0);
    path.close();
  }
};

mxCellRenderer.registerShape('box', BoxShape);
// <---------------------------------End of Custome shape--------------------------------------------->
var vertexStyle_cylinder = 'shape=cylinder;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
  'gradientColor=#a0a0a0;fontColor=black;fontStyle=1;spacingTop=12;';
var vertexStyle_box = 'shape=box;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
  'gradientColor=#a0a0a0;fontColor=black;fontStyle=1;spacingTop=12;';
var vertexStyle_rectangle = 'shape=rectangle;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
    'gradientColor=#a0a0a0;fontColor=black;fontStyle=1;spacingTop=12;';

// <---------------------- SVG register here----------------------------->
    function configureStylesheet(graph)
    {
      var style = new Object();
      style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
      style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
      style[mxConstants.STYLE_IMAGE] = 'src/pic/valves.svg';
      style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
      graph.getStylesheet().putCellStyle('LV', style);

      style = mxUtils.clone(style);
      style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
    style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    style[mxConstants.STYLE_IMAGE] = 'src/pic/PRV.svg';
    style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
    graph.getStylesheet().putCellStyle('PRV', style);

    style = mxUtils.clone(style);
    style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
    style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    style[mxConstants.STYLE_IMAGE] = 'src/pic/pieline.svg';
    style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
    graph.getStylesheet().putCellStyle('pipeline', style);

    style = mxUtils.clone(style);
    style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
    style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    style[mxConstants.STYLE_IMAGE] = 'src/pic/tube.svg';
    style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
    graph.getStylesheet().putCellStyle('tube', style);
    };



// <----------------------end of SVG register here----------------------------->


// <------------------------------------Top whole grpah ------------------------------------------>
function graph_0(container)
{
  // init
  var graph = new mxGraph(container);
  graph.setEnabled(false);

  configureStylesheet(graph);
  var parent = graph.getDefaultParent();

  graph.setAllowDanglingEdges(false);
  graph.setCellsEditable(false);
  graph.setConnectable(true);
  graph.centerZoom = false;

// Vertex style used

  graph.getModel().beginUpdate();
  try
  {

    // All the vertexs
    var v1_heat = true;
    var v2_heat = false;
    var v3_heat = false;

    var v0 = graph.insertVertex(parent,null,'',160,10,1,1,'')
    var v1 = graph.insertVertex(parent, null, 'Tank 0', 170, 40, 70, 100,vertexStyle_cylinder);
    var v2 = graph.insertVertex(parent, null, 'Tank 1', 170, 120, 70, 100,vertexStyle_cylinder);
    var v3 = graph.insertVertex(parent, null, 'Tank 2', 170, 200, 70, 100,vertexStyle_cylinder);
    var v4 = graph.insertVertex(parent,null,'',235,340,1,1,'');
    var v11 = graph.insertVertex(parent,null,'',260,100,1,1,'');
    var v12 =graph.insertVertex(parent, null, '', 290, 86, 30, 30, 'PRV');
    var v13 = graph.insertVertex(parent,null,'',340,130,20,100,'tube');
    var v14 = graph.insertVertex(parent,null,'',360,180,1,1,'');
    var v15 = graph.insertVertex(parent,null,'',390,180,1,1,'');
    var v16 = graph.insertVertex(parent,null,'',390,175,100,70,'pipeline');
    var v17 = graph.insertVertex(parent,null,'',485,240,1,1,'');
    var v18 = graph.insertVertex(parent,null,'',510,240,1,1,'');
    var v19 = graph.insertVertex(parent,null,'',350,225,1,1,'');
    var v5 = graph.insertVertex(parent, null, 'Tank 3', 10,170, 70, 40,vertexStyle_box);
    var v6 = graph.insertVertex(parent,null,'Tank 4',25,110,40,70,vertexStyle_cylinder);
    var v7 = graph.insertVertex(parent,null,'Tank 5',100,140,40,70,vertexStyle_rectangle);


    var v8 = graph.insertVertex(parent, null, 'Tank 6', 10,400, 70, 40,vertexStyle_box);
    var v9 = graph.insertVertex(parent,null,'Tank 7',25,340,40,70,vertexStyle_cylinder);
    var v10 = graph.insertVertex(parent,null,'Tank 8',100,370,40,70,vertexStyle_rectangle);

    var v20 = graph.insertVertex(parent,null,'tank 9',420,300,40,70,vertexStyle_cylinder)


    var v21 = graph.insertVertex(parent, null, 'Tank 10', 490,400, 70, 40,vertexStyle_box);
    var v22 = graph.insertVertex(parent,null,'Tank 11',505,340,40,70,vertexStyle_cylinder);
    var v23 = graph.insertVertex(parent,null,'Tank 12',580,370,40,70,vertexStyle_rectangle);

    var v24 =graph.insertVertex(parent,null,'',330,340,40,40,'LV');
    var v25 = graph.insertVertex(parent,null,'',280,390,1,1,'');

// All the edge (pipline)

    var e0 = graph.insertEdge(parent, null, '', v0, v1, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e1 = graph.insertEdge(parent, null, '', v3, v4, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    e1.geometry.points = [new mxPoint(205,300)]

    var e2 = graph.insertEdge(parent, null, '', v4, v11, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');


    var e13 = graph.insertEdge(parent, null, '', v8, v10, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e14 = graph.insertEdge(parent, null, '', v10, v0, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e15 = graph.insertEdge(parent, null, '', v7, v0, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e3 = graph.insertEdge(parent,null,'',v5,v7,'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e4 = graph.insertEdge(parent, null, '', v11, v12, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e5 = graph.insertEdge(parent, null, '', v12, v13, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e6 = graph.insertEdge(parent, null, '', v14, v15, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e7 = graph.insertEdge(parent, null, '', v17, v18, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e8 = graph.insertEdge(parent, null, '', v18, v6, 'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    e8.geometry.points=[new mxPoint(45,80)]

    var e9 = graph.insertEdge(parent,null,'',v19,v20,'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    e9.geometry.points=[new mxPoint(440,270)]

    var e10 = graph.insertEdge(parent,null,'',v20,v22,'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

   var e11 = graph.insertEdge(parent,null,'',v20,v24,'strokeWidth=3;endArrow=false;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    var e12 = graph.insertEdge(parent,null,'',v24,v25,'strokeWidth=3;endArrow=block;' +
         'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e16 = graph.insertEdge(parent,null,'',v21,v23,'strokeWidth=3;endArrow=false;' +
         'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');



// cell ordder
    graph.orderCells(true, [e8,v3,v2,v1]);


// Style can be changed in here
  if (v1_heat) {
      graph.getModel().setStyle(v2,'shape=cylinder;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
        'gradientColor=#f44e42;fontColor=black;fontStyle=1;spacingTop=12;')
    }
  }
  finally
  {
    // Updates the display
    graph.getModel().endUpdate();
  }

// Animation can be control in here
  var state_0 = graph.view.getState(e0);
	state_0.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_1 = graph.view.getState(e1);
  state_1.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_2 = graph.view.getState(e2);
	state_2.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_3 = graph.view.getState(e3);
	state_3.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_4 = graph.view.getState(e4);
	state_4.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_5 = graph.view.getState(e5);
	state_5.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_6 = graph.view.getState(e6);
	state_6.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_7 = graph.view.getState(e7);
	state_7.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_8 = graph.view.getState(e8);
	state_8.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_9 = graph.view.getState(e9);
	state_9.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_10 = graph.view.getState(e10);
	state_10.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_11 = graph.view.getState(e11);
  state_11.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_12 = graph.view.getState(e12);
  state_12.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_13 = graph.view.getState(e13);
  state_13.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_14 = graph.view.getState(e14);
  state_14.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_15 = graph.view.getState(e15);
  state_15.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_16 = graph.view.getState(e16);
  state_16.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
};

// <------------------------------------End of Top whole grpah ------------------------------------------>

function graph_1(container)
{
  var graph = new mxGraph(container);
  graph.setEnabled(false);
  var parent = graph.getDefaultParent();

  graph.getModel().beginUpdate();
  try
  {
    var v1_heat = true;
    var v2_heat = false;
    var v3_heat = false;
    var v0 = graph.insertVertex(parent,null,'',90,10,1,1,'')
    var v1 = graph.insertVertex(parent, null, 'Tank 0', 100, 40, 70, 100,vertexStyle_cylinder);
    var v2 = graph.insertVertex(parent, null, 'Tank 1', 100, 120, 70, 100,vertexStyle_cylinder);
    var v3 = graph.insertVertex(parent, null, 'Tank 2', 100, 200, 70, 100,vertexStyle_cylinder);
    var v4 = graph.insertVertex(parent,null,'',165,340,1,1,'')
    var e0 = graph.insertEdge(parent, null, '', v0, v1, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e1 = graph.insertEdge(parent, null, '', v3, v4, 'strokeWidth=3;endArrow=block;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    e1.geometry.points = [new mxPoint(135,300)]
    graph.orderCells(true, [v3,v2,v1]);
    if (v1_heat) {
      graph.getModel().setStyle(v2,'shape=cylinder;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
        'gradientColor=#f44e42;fontColor=black;fontStyle=1;spacingTop=12;')
    }
  }
  finally
  {
    // Updates the display
    graph.getModel().endUpdate();
  }
  // PipE animation control
  var state_0 = graph.view.getState(e0);
  state_0.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_1 = graph.view.getState(e1);
  state_1.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
};

// SVG, jpg, gif can be register into a string name


function graph_2(container)
{
  var graph = new mxGraph(container);
  graph.setEnabled(false);
  configureStylesheet(graph);
  var parent = graph.getDefaultParent();

  graph.getModel().beginUpdate();
  try
  {
    var v1_heat = true;

    var v2_heat = false;
    var v3_heat = false;
    var v0 = graph.insertVertex(parent,null,'',110,10,1,1,'')
    var v1 = graph.insertVertex(parent, null, 'Tank 9', 120, 40, 40,70,vertexStyle_cylinder);
    var v2 = graph.insertVertex(parent, null, 'Tank 10', 175, 120, 40, 70,vertexStyle_cylinder);
    var v3 = graph.insertVertex(parent, null, 'Tank 2', 160, 180, 70, 40,vertexStyle_box);
    var v5 = graph.insertVertex(parent,null,'Tank 19',260,150,40,70,vertexStyle_rectangle)
    var v6 = graph.insertVertex(parent,null,'',60,120,40,40,'LV');
    var v7 =  graph.insertVertex(parent,null,'',10,190,1,1,'')

    var e0 = graph.insertEdge(parent, null, '', v0, v1, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e1 = graph.insertEdge(parent, null, '', v1, v2, 'strokeWidth=3;endArrow=block;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e2 = graph.insertEdge(parent, null, '', v2, v5, 'strokeWidth=3;endArrow=block;' +
          'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e3 = graph.insertEdge(parent, null, '', v1, v6, 'strokeWidth=3;endArrow=block;' +
        'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e4 = graph.insertEdge(parent, null, '', v6, v7, 'strokeWidth=3;endArrow=block;' +
          'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');


    graph.orderCells(true, [v3,v2,v1]);
    if (v1_heat) {
      graph.getModel().setStyle(v2,'shape=cylinder;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
        'gradientColor=#f44e42;fontColor=black;fontStyle=1;spacingTop=12;')
    }
  }
  finally
  {
    // Updates the display
    graph.getModel().endUpdate();
  }
  // PipE animation control
  var state_0 = graph.view.getState(e0);
  state_0.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_1 = graph.view.getState(e1);
  state_1.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_2 = graph.view.getState(e2);
  state_2.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_3 = graph.view.getState(e3);
  state_3.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_4 = graph.view.getState(e4);
  state_4.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
};


function graph_3(container)
{
  var graph = new mxGraph(container);
  graph.setEnabled(false);
  var parent = graph.getDefaultParent();

  graph.getModel().beginUpdate();
  try
  {
    var v1_heat = true;
    var v2_heat = false;
    var v3_heat = false;
    var v0 = graph.insertVertex(parent,null,'',190,60,1,1,'');
    var v2 = graph.insertVertex(parent, null, 'Tank 10', 35, 90, 40, 70,vertexStyle_cylinder);
    var v3 = graph.insertVertex(parent, null, 'Tank 2', 20, 150, 70, 40,vertexStyle_box);
    var v5 = graph.insertVertex(parent,null,'Tank 19',120,100,40,70,vertexStyle_rectangle);
    var v6 = graph.insertVertex(parent,null,'',170,30,1,1,'');

    var e0 = graph.insertEdge(parent, null, '', v0, v2, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e1 = graph.insertEdge(parent, null, '', v3, v5, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e2 = graph.insertEdge(parent, null, '', v5, v6, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    e2.geometry.points = [new mxPoint(170,100)]

    graph.orderCells(true, [v3,v2]);

  }
  finally
  {
    // Updates the display
    graph.getModel().endUpdate();
  }
  // PipE animation control
  var state_0 = graph.view.getState(e0);
  state_0.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_1 = graph.view.getState(e1);
  state_1.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_2 = graph.view.getState(e2);
  state_2.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');

};



function graph_4(container)
{
  var graph = new mxGraph(container);
  graph.setEnabled(false);
  var parent = graph.getDefaultParent();

  graph.getModel().beginUpdate();
  try
  {
    var v1_heat = true;
    var v2_heat = false;
    var v3_heat = false;
    var v2 = graph.insertVertex(parent, null, 'Tank 10', 25, 90, 40, 70,vertexStyle_cylinder);
    var v3 = graph.insertVertex(parent, null, 'Tank 2', 10, 150, 70, 40,vertexStyle_box);
    var v5 = graph.insertVertex(parent,null,'Tank 19',110,100,40,70,vertexStyle_rectangle);
    var v6 = graph.insertVertex(parent,null,'',190,30,1,1,'');

    var e1 = graph.insertEdge(parent, null, '', v3, v5, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');
    var e2 = graph.insertEdge(parent, null, '', v5, v6, 'strokeWidth=3;endArrow=block;' +
      'endSize=2;endFill=1;strokeColor=black;rounded=1;edgeStyle=orthogonalEdgeStyle');

    graph.orderCells(true, [v3,v2]);

  }
  finally
  {
    // Updates the display
    graph.getModel().endUpdate();
  }
  // PipE animation control

  var state_1 = graph.view.getState(e1);
  state_1.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
  var state_2 = graph.view.getState(e2);
  state_2.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');

};
