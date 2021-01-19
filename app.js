var c = document.querySelector("#canvas");
var ctx = c.getContext("2d");
var image = new Image();
var file;
var data;
var name = "<Placeholder>";
var name1 = "<Placeholder2>";
var names = [];
colorWell = document.querySelector("#colorWell");
ctx.textAlign = "center";
var color = "#000000";
var size = 30;
ctx.fillStyle = color;
var x = 500;
var y = 300;
var x1 = 900;
var y1 = 300;
var speed = 2;
var span = document.getElementById('speed'); // find the <span> element in the DOM
var increment = document.getElementById('increment'); // find the element with the ID 'increment'
var decrement = document.getElementById('decrement'); // find the element with the ID 'decrement'

function showBorder(width, height) {
  let canvas = document.getElementById("canvas");
  var parentCanvas = canvas.parentElement;
  parentCanvas.offsetHeight = height;
  parentCanvas.offsetWidth = width;
}

function checkImage() {
  if (typeof data === "undefined") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You didn`t upload certificate photo!",
    });
    return false;
  } else {
    return true;
  }
}

function showInfo() {
  Swal.fire({
    icon: "info",
    title: "Oops...",
    text: "You didn`t enter any names",
  });
}

function handleImageUpload() {
  file = document.getElementById("upload").files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    data = e.target.result;

    image.onload = () => {
      window.imageSrc = this;
      onLoadImg(x, y);
    };
    image.src = data;
  };
  reader.readAsDataURL(file);
}

image.onload = () => {
  onLoadImg(x, y);
};

function onLoadImg(x, y) {
  var width = image.naturalWidth;
  var height = image.naturalHeight;
  c.width = width;
  c.height = height;
  console.log("w=" + width + " h=" + height);
  c.className = "border";
  ctx.font = size + "px Comic Sans MS";
  ctx.fillStyle = color;
  ctx.drawImage(image, 0, 0, width, height);
  c.setAttribute("dir", "ltr");
  ctx.direction = "rtl";
  ctx.fillText(name, x, y);
  ctx.fillText(name1, x1, y1);
}

function sizeDecrease() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size -= 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function sizeIncrease() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    size += 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function up() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    y -= speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function down() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    y += speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function right() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    x += speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function left() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    x -= speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
}

function up1() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    y1 -= speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x1, y1);
    };
    image.src = data;
  }
}

function down1() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    y1 += speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x1, y1);
    };
    image.src = data;
  }
}

function right1() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    x1 += speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x1, y1);
    };
    image.src = data;
  }
}

function left1() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    x1 -= speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x1, y1);
    };
    image.src = data;
  }
}

function x1() {
  speed = 1;
}

function x10() {
  speed = 10;
}

function x50() {
  speed = 50;
}

function x100() {
  speed = 100;
}

function x500() {
  speed = 500;
}

document.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.keyCode === 37) {
    //left
    left();
  }
  if (e.keyCode === 65) {
    //left
    left1();
  }
  if (e.keyCode === 83) {
    //left
    down1();
  }
  if (e.keyCode === 68) {
    //left
    right1();
  }
  if (e.keyCode === 87) {
    //left
    up1();
  }
  if (e.keyCode === 39) {
    //right
    right();
  }
  if (e.keyCode === 38) {
    //up
    up();
  }
  if (e.keyCode === 40) {
    //down
    down();
  }
  if (e.keyCode === 189) {
    //-
    sizeDecrease();
  }
  if (e.keyCode === 187) {
    //+
    sizeIncrease();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  image.onload = () => {
    onLoadImg(x, y);
  };
  image.src = data;
}

colorWell.addEventListener("input", () => {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    color = event.target.value;
    console.log(ctx.fillStyle);
    console.log(event.target.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = () => {
      onLoadImg(x, y);
    };
    image.src = data;
  }
});

function addName() {
  name = document.getElementById("name").value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  image.onload = () => {
    onLoadImg(x, y);
  };
  image.src = data;
}

var obj_csv = {
  size:0,
  dataFile:[]
};


function addNames(input) {
  console.log(input)
  if (input.files && input.files[0]) {
   let reader = new FileReader();
       reader.readAsBinaryString(input.files[0]);
   reader.onload = function (e) {
      console.log(e);
     obj_csv.size = e.total;
     obj_csv.dataFile = e.target.result
           console.log(obj_csv.dataFile)
           names = parseData(obj_csv.dataFile);        
   }
 }
}

function saveEveryName(StudentName) {
  name = StudentName;
}

function saveFile() {
  c.toBlob(function (blob) {
    // blob ready, download it
    let link = document.createElement("a");
    link.download = "Certificate.png";
    link.href = URL.createObjectURL(blob);
    link.click();
    // delete the internal blob reference, to let the browser clear memory from it
    URL.revokeObjectURL(link.href);
  }, "image/png");
}

function resetcoord()
{
  x = 500;
  y = 300;
  x1 = 900;
  y1= 300;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
        onLoadImg(x, y);
        image.src = data;
}

function saveZip() {
  var resultCondition = checkImage();
  if (resultCondition == true) {
    var imgUrl;
    var zip = new JSZip();
    console.log(names);
    if (names == null) {
      showInfo();
    } else {
      for (let i = 1; i < names.length; i++) {
        name = names[i][0];
        name1 = names[i][1];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        onLoadImg(x, y);
        image.src = data;
        imgUrl = c.toDataURL();
        zip.file("certificate" + [i + 1] + ".png", imgUrl.split("base64,")[1], {
          base64: true,
        });
      }

      zip.generateAsync({type: "blob"}).then(function (content) {
        // see FileSaver.js
        saveAs(content, "Certificates.zip");
      });
    }
  }
}

function parseData(data){
    let csvData = [];
    let lbreak = data.split("\n");
    lbreak.forEach(res => {
        csvData.push(res.split(","));
    });
    return csvData;
}