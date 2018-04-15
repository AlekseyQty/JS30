const inputs = document.querySelectorAll('input');
console.log(inputs);

function handleUpdate() {
    const sizing = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+sizing);
    console.log(sizing);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
