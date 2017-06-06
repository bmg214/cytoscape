var cy = cytoscape({
  container: document.getElementById('cy'),
  style: cytoscape.stylesheet()
    .selector('node[label = "pc"]')
    .css({
      'background-image': 'img/pc.png',
      "width": '50px',
      'background-fit': 'cover',
      'target-arrow-shape': 'triangle',
      'height': '50px'
    })
    .selector('node[label = "router"]')
    .css({
      'background-image': 'img/router.png',
      "width": '50px',
      'height': '50px'
    })
    .selector('node[label = "jx"]')
    .css({
      'background-image': 'img/jx.png',
      "width": '100px',
      'height': '100px'
    })
    .selector('node[label = "yjjx"]')
    .css({
      'background-image': 'img/yjjx.png',
      "width": '150px',
      'height': '150px'
    })
});

var count = 0;

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  cy.add({
    group: "nodes",
    data: {
      id: data + "_" + count,
      label: data
    },
    //cy.pan()得到拖动画布的偏移量,cy.zoom()得到画布的缩放倍数
    position: {
      x: (ev.offsetX - cy.pan().x) / cy.zoom(),
      y: (ev.offsetY - cy.pan().y) / cy.zoom()
    }
  })
  count++
}

cy.on('tap', function(evt) {
    if (evt.target.length) {
      var ele = evt.target;
      var node = cy.$('#' + ele.id())
  
      getNodeAttribute(node)
      setNodeAttribute(node) 

      $("#graphEditor").animate({
        right: '5px'
      });
    } else {
      $("#graphEditor").animate({
        right: '-305px'
      });

    }
});
