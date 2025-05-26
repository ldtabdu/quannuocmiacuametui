// Hiệu ứng scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((el) => {
    observer.observe(el);
  });

  // Bảng giá
  const priceBtn = document.getElementById("priceBtn");
  const priceTable = document.getElementById("priceTable");

  priceBtn.addEventListener("click", function () {
    priceTable.classList.toggle("show");
    priceBtn.textContent = priceTable.classList.contains("show")
      ? "Ẩn Bảng Giá"
      : "Xem Bảng Giá";
  });

  // Hiệu ứng hover cho card
  const cards = document.querySelectorAll(".menu-card, .payment-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const x = e.pageX - card.offsetLeft;
      const y = e.pageY - card.offsetTop;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
});
