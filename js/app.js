const detailDialog = document.querySelector("#detailDialog");

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const trigger = event.target.closest(".btn-lihat");
  if (!trigger || !detailDialog) return;

  const cells = trigger.closest("tr")?.cells;
  if (cells) {
    document.querySelector("#detail-id").textContent = cells[1].textContent.trim();
    document.querySelector("#detail-pengunggah").textContent = cells[2].textContent.trim();
    document.querySelector("#detail-gunung").textContent = cells[4].textContent.trim();
    document.querySelector("#detail-tanggal").textContent = cells[3].textContent.trim();
  }

  detailDialog.showModal();
  document.querySelector("#detail-permintaan-id").focus();
});

document.querySelector("#batalDialogBtn")?.addEventListener("click", () => {
  detailDialog?.close();
});
