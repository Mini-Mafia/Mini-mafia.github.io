window.onload = () => {
  ab.onclick = () => {
    let bru = window.open("about:blank", "_blank");
    if (!bru) alert("about blank cloak failed");
    bru.document.write(`<html><body><iframe src="https://mini-mafia.github.io/g"></iframe><style>iframe{width:100%;height:100dvh;border:none}body{margin:0}</style></body></html>`)
  };
};
