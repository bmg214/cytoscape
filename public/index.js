var cy = cytoscape({
    container: document.getElementById('cy'),
    style: cytoscape.stylesheet()
        .selector('node[label = "pc"]')
        .css({
            'background-image': 'img/pc.png'
        })
        .selector('node[label = "router"]')
        .css({
            'background-image': 'img/router.png'
        })
        .selector('node[label = "jx"]')
        .css({
            'background-image': 'img/jx.png'
        })
        .selector('node[label = "yjjx"]')
        .css({
            'background-image': 'img/yjjx.png'
        })
        .selector('node')
        .css({
            'width': 'data(width)',
            'height': 'data(height)',
            'background-color': 'data(bgColor)',  //背景色
            'content': 'data(name)',  //
            'shape': 'data(shape)', //形状
            'font-size': 'data(fontSize)', //文字大小
            'text-valign': 'data(textValign)',//文字位置 left  right  center bottom  top
            'text-outline-width': 'data(textOW)',
            'text-outline-color': 'data(textOC)',
            'color': 'data(color)',
            'border-width': 'data(borderW)',
            'border-color': 'data(borderC)',
            'border-style': 'data(borderS)',
        })
});

var count = 0;

function drop(ev) {
    ev.preventDefault();
    var data = eval("(" + ev.dataTransfer.getData("data") + ")");
    cy.add({
        group: "nodes",
        data: {
            id: data.name + "_" + count, //节点ID
            label: data.name,
            name: data.name, //节点名称
            query: true,
            gene: true,
            //节点形状  triangle 三角形  ellipse 圆形  octagon 正八边形  rectangle 矩形  roundrectangle 圆角矩形  cutrectangle  square 正方形
            // pentagon 正五边形  hexagon 正六边形  heptagon 正七边形  star 五角星  diamond 菱形  vee 内三角  rhomboid 平行四边形 polygon 正方形
            shape: data.shape ? data.shape : 'rectangle',
            bgColor: data.bgColor ? data.bgColor : '#ff0000', //节点背景色
            fontSize: data.fontSize ? data.fontSize : 12, //文字大小
            textValign: data.textValign ? data.textValign : 'top',//文字位置
            textOW: data.textOW ? data.textOW : '0', //文字边框宽度
            textOC: data.textOC ? data.textOC : '#ff0000', //文字边框颜色
            color: data.color ? data.color : '#ff0000', //文字颜色
            width: data.width ? data.width : 50,
            height: data.height ? data.height : 50,
            borderW: data.borderW ? data.borderW : 1, //边框宽度
            borderC: data.borderC ? data.borderC : "#000000", //边框颜色
            borderS: data.borderS ? data.borderS : "dashed",  //边框样式
        },
        //cy.pan()得到拖动画布的偏移量,cy.zoom()得到画布的缩放倍数
        position: {
            x: (ev.offsetX - cy.pan().x) / cy.zoom(),
            y: (ev.offsetY - cy.pan().y) / cy.zoom()
        }
    });
    count++
}

/*
 cytoscape事件类型
 mouseover:鼠标经过
 tap:左键点击
 taphold:长按
 drag  tapdragover  vclick  click
 select:选中
 cxttapstart:右键点击
 cxtdrag:右键拖拽
 cxtdragout  cxtdragover
 cy.on('tap', function (ev) {
 // console.log(ev)
 });
 */
//左键事件
cy.on('tap', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.target.length) {
        let ele = ev.target;
        let node = cy.$('#' + ele.id());
        getNodeAttribute(node);
        setNodeAttribute();
        changeColor();
        //selectNode(node);

        $("#graphEditor").animate({
            right: '5px'
        });

        $("#dropdown-menu").hide()
    } else {
        $("#graphEditor").animate({
            right: '-305px'
        });
        $("#dropdown-menu").hide()
    }
});
document.oncontextmenu = function () {
    return false;
};
//右键事件
cy.on('cxttap', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var cw = cy.width();
    var ch = cy.height();
    var mw = $("#dropdown-menu").outerWidth();
    var mh = $("#dropdown-menu").outerHeight();
    var x = ev.originalEvent.clientX;
    var y = ev.originalEvent.clientY;
    var tx = x + mw - cw;
    var ty = y + mh - ch;
    if (tx > 0 && ty < 0) {
        $("#dropdown-menu").show().css({
            top: y,
            left: x - tx / 2 + 15
        });
    } else if (ty > 0 && tx < 0) {
        $("#dropdown-menu").show().css({
            top: y - ty - 5,
            left: x
        });
    } else if (tx > 0 && ty > 0) {
        $("#dropdown-menu").show().css({
            top: y - ty - 5,
            left: x - tx / 2 + 15
        });
    } else {
        $("#dropdown-menu").show().css({
            top: y,
            left: x
        });
    }

    if (ev.target.length) {

        var ele = ev.target;
        var node = cy.$('#' + ele.id());
    } else {
        // console.log(ev)
    }
});



