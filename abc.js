window.onload = () => {
  let cloak_btn = document.querySelector("button");
  
  let content = `<!DOCTYPE html>
  <!-- Please speed I need this my mom is kinda homeless -->
  <html>
  <body>
  <iframe src="https://mini-mafia.github.io/" allow="fullscreen"></iframe>
  <style>
  iframe {
    height: 100dvh;
    width: 100%;
    border: none;
  }
  
  body {
    margin: 0;
  }
  </style>
  </body>
  </html>`;
  
  const newTab = window.open("about:blank", "_blank");
  newTab.document.open();
  newTab.document.write(content);
};
