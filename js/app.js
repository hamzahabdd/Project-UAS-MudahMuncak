const detailDialog = document.querySelector("#detailDialog");

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const trigger = event.target.closest(".btn-lihat");
  if (!trigger || !detailDialog) return;

  const cells = trigger.closest("tr")?.cells;
  if (cells) {
    const detailValues = {
      "#detail-id": cells[1]?.textContent.trim(),
      "#detail-pengunggah": cells[2]?.textContent.trim(),
      "#detail-gunung": cells[4]?.textContent.trim(),
      "#detail-tanggal": cells[3]?.textContent.trim(),
    };

    Object.entries(detailValues).forEach(([selector, value]) => {
      const element = document.querySelector(selector);
      if (element && value) element.textContent = value;
    });
  }

  if (typeof detailDialog.showModal === "function") {
    detailDialog.showModal();
  } else {
    detailDialog.setAttribute("open", "");
  }

    document.querySelector("#detail-permintaan-id")?.focus();
});

document.querySelector("#batalDialogBtn")?.addEventListener("click", () => {
  if (!detailDialog) return;

  if (typeof detailDialog.close === "function") {
    detailDialog.close();
  } else {
    detailDialog.removeAttribute("open");
  }
});

