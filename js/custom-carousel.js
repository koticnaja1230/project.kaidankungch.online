(() => {
  const wrap = document.getElementById("cc");
  const items = Array.from(wrap.querySelectorAll(".cc-item"));
  const prevBtn = wrap.querySelector(".cc-prev");
  const nextBtn = wrap.querySelector(".cc-next");

  let index = 0;
  const total = items.length;

  function render(){
    items.forEach((el, i) => {
      el.classList.remove("is-active","is-prev","is-next");
      if(i === index) el.classList.add("is-active");
      if(i === (index - 1 + total) % total) el.classList.add("is-prev");
      if(i === (index + 1) % total) el.classList.add("is-next");
    });
  }

  function next(){ index = (index + 1) % total; render(); }
  function prev(){ index = (index - 1 + total) % total; render(); }

  let timer = setInterval(next, 5000);
  function resetAuto(){
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  nextBtn.addEventListener("click", () => { next(); resetAuto(); });
  prevBtn.addEventListener("click", () => { prev(); resetAuto(); });

  render();
})();
