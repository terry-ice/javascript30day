const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  //console.log(this);

  // 利用 dataset 取得單位，取不到時給予空值當作預設值
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
// 移動 range 馬上顯示濾鏡效果
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
