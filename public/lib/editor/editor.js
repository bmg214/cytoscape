function selectNode(node) {
    resizeBorder(node)
}

function resizeBorder(node) {
    var canvas = $("#cy canvas")[0];
    var cxt = canvas.getContext("2d");
    let x = node.position("x");
    let y = node.position("y");
    let w = node.width();
    let h = node.height();
    cxt.lineWidth = 0.5;
    cxt.beginPath();
    cxt.strokeRect(x-w/2, y-h/2,w,h);//矩形边框
    cxt.lineWidth = 1;
    cxt.strokeRect(x-w/2-1, y-h/2, 2, 2); //左上角的点
    cxt.strokeRect(x, y-h/2-1, 2, 2); //顶部中间
    cxt.strokeRect(x+w/2-1, y-h/2-1, 2, 2); //右上角的点
    cxt.strokeRect(x-w/2-1, y, 2, 2); //左边中间
    cxt.strokeRect(x+w/2-1, y, 2, 2); //右边中间
    cxt.strokeRect(x-w/2-1, y+h/2-1, 2, 2); //左下角的点
    cxt.strokeRect(x+w/2-1, y+h/2-1, 2, 2); //右下角的点
    cxt.strokeRect(x-1, y+h/2-1, 2, 2); //底部中间
    cxt.closePath();/*可选步骤，关闭绘制的路径*/
    cxt.stroke();

    var bbox =canvas.getBoundingClientRect();
}

function getNodeAttribute(node) {
    $("#graphEditor input[name='node-name']").val(node.data().name);
    $("#graphEditor input[name='node-width']").val(node.width());
    $("#graphEditor input[name='node-height']").val(node.height());
    $("#graphEditor input[name='node-bgColor']").val(node.height());
    $("#graphEditor input[name='node-bgColor']").val(node.height());
    $("#graphEditor input[name='node-positionX']").val(node.json().position.x);
    $("#graphEditor input[name='node-positionY']").val(node.json().position.y);
}

function setNodeAttribute() {
    //设置名称
    $("#graphEditor input[name='node-name']").on("change",function (argument) {
        var value = this.value;
        cy.nodes().forEach(function( ele ){
           if(ele.selected()){
               ele.data().name = value
           }
        });
   });
     //设置形状
    $("#graphEditor select[name='node-shape']").on("change",function (argument) {
        var value = this.value;
        cy.nodes().forEach(function( ele ){
           if(ele.selected()){
               ele.data().shape = value
           }
        });
   });
   //设置宽度
   $("#graphEditor input[name='node-width']").on("change",function (argument) {
        var value = this.value;
        cy.nodes().forEach(function( ele ){
           if(ele.selected()){
                ele.data().width = value
           }
        });
   });
   //设置宽度
   $("#graphEditor input[name='node-height']").on("change",function (argument) {
        var value = this.value;
        cy.nodes().forEach(function( ele ){
           if(ele.selected()){
                ele.data().height = value
           }
        });
   });
   //设置X坐标
   $("#graphEditor input[name='node-positionX']").on("change",function (argument) {
        var value = this.value;
        cy.nodes().forEach(function( ele ){
           if(ele.selected()){
               ele.position('x', Number(value));
           }
        });
   });
   //设置Y坐标
   $("#graphEditor input[name='node-positionY']").on("change",function (argument) {
        var value = this.value;
        cy.nodes().forEach(function( ele ){
           if(ele.selected()){
               ele.position('y', Number(value));
           }
        });
   });
}

function changeColor() {
  $("[name='triggerSet']").spectrum({
      preferredFormat: "hex",
      showPalette: true,
      showInput: true,
      chooseText: "确定",
      cancelText: "取消",
      palette: [
          ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
          ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
          ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
          ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
          ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
          ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
          ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
          ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
      ]
  })
}



