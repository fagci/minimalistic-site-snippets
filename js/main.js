// current link highlight
(function() {
  const doc = window.document;
  const links = doc.links;
  const linksCount = links.length;
  for (let i = 0; i < linksCount; i++)
    if(doc.URL.startsWith(links[i].href))
      links[i].classList.add('active');
})();
// toc
(function() {
window.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc');
    const h = document.querySelectorAll('h2');
    for (let i in h) {
        if (!h.hasOwnProperty(i)) continue;
      
        const el = h[i];
        if (el.dataset.notoc || el.innerText.trim().length < 2) continue;
        if (!el.id) {
            el.id = el.dataset.toc || el.innerText;
        }
      
        const link = document.createElement('a');
        link.innerText = el.dataset.toc || el.innerText;
        link.classList.add('ym-toc__item');
        link.href = '#' + el.id;
        toc.appendChild(link);
    }
})
})();
