
function submitForm(event) {
    event.preventDefault();
  
    var productName = document.getElementById("productName").value; 
    var unitPrice = parseFloat(document.getElementById("unitPrice").value);
    var stock = parseInt(document.getElementById("stock").value);
  
    var totalPrice = unitPrice * stock;
  
    var product = { 
      name: productName,
      price: unitPrice,
      stock: stock,
      totalPrice: totalPrice
    };
  
    var productJSON = JSON.stringify(product);
  
    localStorage.setItem("products", productJSON);
  
    window.location.href = "result.html";
  }

  
  