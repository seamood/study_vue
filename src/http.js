var xmlhttmp = new XMLHttpRequest()
let url = location.href
xmlhttmp.open('get', url, true)
xmlhttmp.onreadystatechange = function () {
  if (xmlhttmp.readyState === XMLHttpRequest.DONE && xmlhttmp.status === 200) {
    console.log(xmlhttmp.responseText)
  }
}
