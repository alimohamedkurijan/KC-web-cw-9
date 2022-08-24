// أنشئ المصفوفة تحت هذا الكومنت
let orders = [];
function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
  let newOrder = {name, id, phone, order,}
  // أدرج الكائن إلى المصفوفة
  orders.push(newOrder)
  // طبق الخطوة 7 تحت هذا الكومنت
  load()
}

function load() {


  let container = document.getElementById("container");
  container.innerHTML = ``;
  // طبّق الخطوة 6 تحت هذا الكومنت
  orders.forEach(element => {
    container.innerHTML +=  `<div><h1>${element.name} - ${element.id}</h1><h3>${element.order}</h3></div>`;
    

});
}

function Removeitem(){

  const element = document.getElementById("container");
  element.remove();

  

}
