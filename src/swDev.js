export default function swDev()
{
    let swUrl= '${process.env.PUBLIC_URL}/sw.js'
    navigator.serviceWorker.register("/sw.js").then((response)=>{
        console.warn("response",response)
      })
}