let banner = document.querySelector(".banner")
window.addEventListener("scroll",function(){
    if(this.window.scrollY>300){
    banner.classList.remove("top-0")
     banner.classList.add("top-[-52px]")
    }else{
        banner.classList.add("top-0")
        banner.classList.remove("top-[-52px]")
    }
})

let phone = document.querySelector(".phone")
let btn=document.querySelector(".btn")
let text=document.querySelector(".text")
let flag = true

btn.addEventListener("click",function(){
    phone.classList.toggle("h-[293px]")   
    btn.classList.toggle("top-[203px]") 
    text.classList.toggle("mb-6")   
    btn.classList.toggle("bottom-0") 
    btn.classList.toggle("border") 
    btn.classList.toggle("bg-white")
    if (flag==true){
    btn.innerText="بستن" 
    btn.classList.remove("text-[blue]")
    btn.classList.add("text-[crimson]")
    flag=false    
}else{
    btn.innerText="مشاهده بیشتر"
    btn.classList.add("text-[blue]")
    btn.classList.remove("text-[crimson]")
    flag=true
    }
})


