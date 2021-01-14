var c = document.querySelector("#canvas");
var ctx = c.getContext("2d");
var image = new Image();
var file;
var data;
var name = "<Placeholder>";
var names = [];
colorWell = document.querySelector("#colorWell");
ctx.textAlign = "center";
var color = "#000000";
var size = 30;
ctx.fillStyle = color;
var x = 500;
var y = 300;
var speed = 0;
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

increment.addEventListener('click', function () {
  // this function is executed whenever the user clicks the increment button
  span.value = ++speed;
});

decrement.addEventListener('click', function () {
  // this function is executed whenever the user clicks the decrement button
  span.value = --speed;
});

document.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.keyCode === 37) {
    //left
    left();
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

function addNames() {
  names = document.getElementById("names").value.match(/[^\s+].*[^\s*]*/g);
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
function preview()
{
  var resultCondition = checkImage();
  if (resultCondition == true) {
    if (names == null) {
      showInfo();
    } else {
      for (let i = 0; i < names.length; i++) {
        name = names[i];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        onLoadImg(x, y);
        image.src = data;
      }
    }
  }
}

function resetcoord()
{
  x = 500;
  y = 300;
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
      for (let i = 0; i < names.length; i++) {
        name = names[i];
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
