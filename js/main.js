// current link highlight
(function() {
  const doc = window.document;
  const links = doc.links
  const linksCount = links.length;
  for (let i = 0; i < linksCount; i++)
    if(doc.URL.startsWith(links[i].href))
      links[i].classList.add('active')
})();
