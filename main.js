// 动态变更css变量值
const box = document.querySelector(".box");
const boxStyle = getComputedStyle(box);
const boxBorderColor = boxStyle.getPropertyValue("--box-border-color");
const header = document.querySelector("#main-header");
header.style.setProperty("--header-bg-color","blue");