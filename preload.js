window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

// 전처리 코드를 넣을 수 있다는 것을 보이기 위한 예제
// https://jetalog.net/104?category=741674
