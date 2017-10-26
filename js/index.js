window.onload = function() {
  /* ====================== 全局变量 ====================== */
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
  var colorDashboard = document.getElementById("color-dashboard");
  var randomBtn = document.getElementById("random-btn");
  var btnList = document.getElementsByClassName("btn-list");

  /* ====================== 页面初始化 ====================== */
  // 一开始进出页面时，随机产生一个颜色
  randomColor();
  // 改变页面文字颜色和滑动条背景颜色
  changeTextColor(redRange.value, greenRange.value, blueRange.value);  
  // 改变页面颜色（背景色）
  changeColor();

  /* ====================== 函数 ====================== */
  // 函数：把颜色值由十进制转化成十六进制(hex)
  function transformToHex(color) {
    var hex = parseInt(color).toString(16);
    if (hex.length == "1") {
      return "0" + hex;
    } else {
      return hex;
    }
  }

  // 函数：改变页面颜色
  function changeColor() {
    colorShow.style.backgroundColor = "rgb(" + redRange.value + "," + greenRange.value + "," + blueRange.value + ")";
    console.log(colorShow.style.backgroundColor);
    colorCode.innerHTML = "#" + transformToHex(redRange.value) + transformToHex(greenRange.value) + transformToHex(blueRange.value);
    changeTextColor(redRange.value, greenRange.value, blueRange.value);    
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
      for (var i=0; i<2; i++){
        btnList.item(i).style.color = "white";
        btnList.item(i).style.border = "1px solid white";
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
      for (var i=0; i<2; i++){
        btnList.item(i).style.color = "#222";
        btnList.item(i).style.border = "1px solid #222";
      }      
    }
  }

  // 函数：随机产生颜色的函数
  function randomColor() {
    //Math.floor(Math.random() * choices + lowerValue)
    redRange.value = Math.floor(Math.random() * 255 + 0);
    greenRange.value = Math.floor(Math.random() * 255 + 0);
    blueRange.value = Math.floor(Math.random() * 255 + 0);    
  }

  /* ====================== 事件处理程序 ====================== */
  // 监听红色<input type="range">
  redRange.onmousedown = function() { 
    document.onmousemove = function() {
      changeColor();
    }
  };

  // 监听绿色<input type="range">
  greenRange.onmousedown = function() { 
    document.onmousemove = function() {
      changeColor();
    }
  };

  // 监听蓝色<input type="range">
  blueRange.onmousedown = function() { 
    document.onmousemove = function() {
      changeColor();
    }
  };

  // 颜色选择面板按钮（#color-dashboard）
  colorDashboard.onclick = function() {
    if (colorPicker.style.display == "none") {
      colorPicker.style.display = null;
    } else {
      colorPicker.style.display = "none";
    }
  };

  // 随机按钮（#random-btn），按了以后会调用randomColor随机生成颜色
  randomBtn.onclick = function() {
    // 随机生成颜色
    randomColor();
    // 改变页面颜色
    changeColor();
    // 改变页面文字颜色和滑动条背景颜色
    changeTextColor(redRange.value, greenRange.value, blueRange.value);    
  }

};

