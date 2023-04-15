
let message : string ;
export default function eventHandler(btn: Element , inp : HTMLInputElement ) : void {
  btn.addEventListener("click" , (): void => {
    try {
      message = inp.value
      const myMessages : SpeechSynthesisUtterance = new SpeechSynthesisUtterance(message)
      speechSynthesis.speak(myMessages)
    }catch (e){
      console.log(e)
    }
  })
}
