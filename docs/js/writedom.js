function write2innerHTML(pID,pContent) {
  var vNode =document.getElementById(pID)
  if (vNode){
    vNode.innerHTML=pContent;
  } else {
    alert("Write DOM-Node 'innerHTML' with ID=["+pID+"] was undefined")
  }}
function write2value(pID,pContent) {
  var vNode =document.getElementById(pID)
  if (vNode){
    vNode.value=pContent;
  } else {
    alert("Write DOM-Node 'value' with ID=["+pID+"] was undefined")
  }
}
function append2innerHTML(pID,pContent) {
  var vNode =document.getElementById(pID)
  if (vNode){
    vNode.innerHTML+=pContent;
  } else {
    alert("Append DOM-Node 'innerHTML' with ID=["+pID+"] was undefined")
  }
}
function append2value(pID,pContent) {
  var vNode =document.getElementById(pID)
  if (vNode){
    vNode.value+=pContent;
  } else {
    alert("DOM-Node 'value' with ID=["+pID+"] was undefined");
  }
}

function getValueDOM(pID) {
  var vNode = document.getElementById(pID);
  var vReturn = "";
  if (!vNode) {
    console.log("DOM Node ["+pID+"] does not exist!");
  } else {
    vReturn = vNode.value;
    if (!vReturn) {
      vReturn = getInnerHTML(pID);
    }
  }
  return vReturn;
}

function getInnerHTML(pID) {
  var vNode = document.getElementById(pID);
  var vReturn = "";
  if (!vNode) {
    console.log("DOM Node ["+pID+"] does not exist!");
  } else {
    vReturn = vNode.innerHTML;
    if (!vReturn) {
      vReturn = "";
      //alert("["+pID+"] Node is undefined");
    } else {
      //alert("["+pID+"] Node defined");
    };
  }
  return vReturn;
};

function isChecked(pID) {
  var vCheckBox = document.getElementById(pID);
  var vReturn = false;
  if (vCheckBox) {
    vReturn = vCheckBox.checked
  } else {
      console.log("ERROR: Checkbox ["+pID+"] is undefined");
  };
  return vReturn;
};
