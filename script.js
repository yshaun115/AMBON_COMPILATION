
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const receipt = document.getElementById('receipt');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        const item = this.value;
        const price = parseFloat(this.nextElementSibling.nextElementSibling.innerText.slice(1));
        const newItem = document.createElement('div');
        newItem.textContent = item + ' - P' + price.toFixed(2);
        receipt.appendChild(newItem);
        updateTotal();
      } else {
        const items = receipt.querySelectorAll('div');
        items.forEach(item => {
          if (item.textContent.includes(this.value)) {
            receipt.removeChild(item);
            updateTotal();
          }
        });
      }
    });
  });

  function updateTotal() {
    const items = receipt.querySelectorAll('div');
    let total = 0;
    items.forEach(item => {
      total += parseFloat(item.textContent.slice(item.textContent.indexOf('P') + 1));
    });
    receipt.innerHTML = ''; // Clear previous content
    items.forEach(item => receipt.appendChild(item)); // Re-append all items
    receipt.innerHTML += '<hr>Total: P' + total.toFixed(2);
  }

  function showCategory(category) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
      if (cat.id === category) {
        cat.style.display = 'block';
      } else {
        cat.style.display = 'none';
      }
    });
  }

