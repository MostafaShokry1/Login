var bookMarkName = document.getElementById("ControlInput1")
var websiteURL = document.getElementById("ControlInput2")
var arr = [];
if (localStorage.getItem("productList") != null) {
  arr = JSON.parse(localStorage.getItem("productList"))
  display()
}
function sendData() {
  if (bookMarkName.value == "") {
    document.getElementById("aler1").style.display = "block"
    return
  }
  else if (websiteURL.value == "") {
    document.getElementById("aler1").style.display = "none"
    document.getElementById("aler2").style.display = "block"
    return
  }
  var product = {
    bookName: bookMarkName.value,
    weburl: websiteURL.value
  }
  arr.push(product);
  localStorage.setItem("productList", JSON.stringify(arr));
  display();
  clearform()
}
function display() {
  var temp = "";
  for (var i = 0; i < arr.length; i++) {
    temp += `
    <section class="py-4 row align-content-center  mt-3  ">
    <h3 class="col-4 fw-bold">`+ arr[i].bookName + `</h3>
    <div class="btn-item col-7">
      <a href="`+ arr[i].weburl + `" target="_blank" class="ms-5"><button class="btn btn-primary">Visit</button></a>
      <button class="btn btn-danger ms-2" onclick="delItem(`+ i + `)">Delete</button>
    </div>
  </section>
    `
  }
  document.getElementById("row-item").innerHTML = temp;
}
function clearform() {
  document.getElementById("aler2").style.display = "none"
  document.getElementById("aler1").style.display = "none"
  bookMarkName.value = "";
  websiteURL.value = "";
}
function delItem(index) {
  arr.splice(index, 1);
  console.log(arr);
  display();
  localStorage.setItem("productList", JSON.stringify(arr));
}