window.onload = function() {
  var colorPicker = document.querySelector(".color-picker");
  var colorShow = document.querySelector("body");
  var redRange = document.querySelector("#red");
  var greenRange = document.querySelector("#green");
  var blueRange = document.querySelector("#blue");
  var colorCode = document.querySelector(".colorCode");
  var colorBar = document.getElementsByClassName("colorRange");
  var label = document.getElementsByTagName("label");
  var pickerTitle = document.querySelector(".picker-title");
  var logo = document.querySelector(".logo");
  var footer = document.querySelector(".footer > a");

  // 函数：把颜色值由十进制转化成十六进制(hex)
  function transformToHex(color) {
    var hex = parseInt(color).toString(16);
    if (hex.length == "1") {
      return "0" + hex;
    } else {
      return hex;
    }
  }

  // 函数：改变页面文字颜色和滑动条背景颜色
  function changeTextColor(redCurrent, greenCurrent, blueCurrent) {
    var sum = parseInt(redCurrent) + parseInt(greenCurrent) + parseInt(blueCurrent);
    if (sum < 384) {
      colorCode.style.color = "white";
      pickerTitle.style.color = "white";
      colorPicker.style.border = "1px solid white";
      logo.style.color = "white";
      footer.style.color = "white";
      for (var i=0; i<3; i++){
        label.item(i).style.color = "white";
        colorBar.item(i).style.backgroundColor = "white";      
      }
    } else {
      colorCode.style.color = "#222";
      pickerTitle.style.color = "#222";
      colorPicker.style.border = "1px solid #222";
      logo.style.color = "#222";
      footer.style.color = "#222";    
      for (var i=0; i<3; i++){
        label.item(i).style.color = "#222";
        colorBar.item(i).style.backgroundColor = "#222";      
      }
    }
  }

  // 获取当前颜色值
  var redCurrent = redRange.value;
  var greenCurrent = greenRange.value;
  var blueCurrent = blueRange.value;
  colorShow.style.backgroundColor = "rgb(" + redCurrent + "," + greenCurrent + "," + blueCurrent + ")";
  colorCode.innerHTML = "#" + transformToHex(redCurrent) + transformToHex(greenCurrent) + transformToHex(blueCurrent);

  // 监听红色
  redRange.onmousedown = function() { 
    document.onmousemove = function() {
      if (redRange.value != redCurrent) {
        // console.log(redRange.value);
        redCurrent = redRange.value;
        colorShow.style.backgroundColor = "rgb(" + redCurrent + "," + greenCurrent + "," + blueCurrent + ")";
        console.log(colorShow.style.backgroundColor);
        colorCode.innerHTML = "#" + transformToHex(redCurrent) + transformToHex(greenCurrent) + transformToHex(blueCurrent);
        changeTextColor(redCurrent, greenCurrent, blueCurrent);
      }
    }
  };

  // 监听绿色
  greenRange.onmousedown = function() { 
    document.onmousemove = function() {
      if (greenRange.value != greenCurrent) {
        // console.log(greenRange.value);
        greenCurrent = greenRange.value;
        colorShow.style.backgroundColor = "rgb(" + redCurrent + "," + greenCurrent + "," + blueCurrent + ")";
        console.log(colorShow.style.backgroundColor);
        colorCode.innerHTML = "#" + transformToHex(redCurrent) + transformToHex(greenCurrent) + transformToHex(blueCurrent);
        changeTextColor(redCurrent, greenCurrent, blueCurrent);
      }
    }
  };

  // 监听蓝色
  blueRange.onmousedown = function() { 
    document.onmousemove = function() {
      if (blueRange.value != blueCurrent) {
        // console.log(blueRange.value);
        blueCurrent = blueRange.value;
        colorShow.style.backgroundColor = "rgb(" + redCurrent + "," + greenCurrent + "," + blueCurrent + ")";
        console.log(colorShow.style.backgroundColor);
        colorCode.innerHTML = "#" + transformToHex(redCurrent) + transformToHex(greenCurrent) + transformToHex(blueCurrent);
        changeTextColor(redCurrent, greenCurrent, blueCurrent);
      }
    }
  };

};

