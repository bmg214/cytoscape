function getNodeAttribute(node) {
    $("#graphEditor input[name='node-width']").val(node.width());
    $("#graphEditor input[name='node-height']").val(node.height());
    $("#graphEditor input[name='node-bgColor']").val(node.height());
    $("#graphEditor input[name='node-bgColor']").val(node.height());
    $("#graphEditor input[name='node-positionX']").val(node.json().position.x);
    $("#graphEditor input[name='node-positionY']").val(node.json().position.y);
}
function setNodeAttribute(node) {
   $("#graphEditor input[name='node-width']").on("change",function (argument) {
      console.log(node.height())
      node.height(176)
      node.data('height', 176);
      console.log(node.data('height'))
      console.log(node.height())

   })
   $("#graphEditor input[name='node-positionX']").on("change",function (argument) {
      node.position('x', Number(this.value));
   })
    $("#graphEditor input[name='node-positionY']").on("change",function (argument) {
      node.position('y', Number(this.value));
   })
}