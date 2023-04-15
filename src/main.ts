import './style.css'
import eventHandler from "./eventHandler";
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="cart">
  <h1>Convert Text To Voice </h1>
    <input placeholder="your message ..." type="text" class="message-inp" name="" id="message">
    <button class="hello-btn">Say</button>
  </div>
`;

const btn : Element = document.getElementsByClassName("hello-btn")[0]
const inp : Element = document.getElementsByClassName("message-inp")[0]

eventHandler(btn , <HTMLInputElement>inp)


