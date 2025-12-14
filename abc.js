window.onload = () => {
  ab.onclick = () => {
    let bru = window.open("", "_blank");
    if (!bru) alert("about blank cloak failed");
    bru.document.write(`<html><body><iframe src="https://mini-mafia.github.io/g"></iframe><style>iframe{width:100%;height:100dvh;border:none}body{margin:0}</style></body></html>`);
    bru.document.close();
  };

  data.onclick = () => {
    window.location.href = `data:text/html, <html> <body> <iframe src="https://mini-mafia.github.io/g"></iframe> <style>html,body{margin:0}iframe{width:100%;height:100dvh}</style> </body> </html>`;
  };
};
