import './style.css'

const app = document.getElementById("app");
const h1 = document.createElement('h1');
const a = document.createElement('a');

h1.textContent="変更してみました。"
a.href = "https://vitejs.dev/guide/features.html";
a.target = "_blank";
a.textContent = "Documentation";

app.appendChild(h1)
app.appendChild(a);



