let listItems=document.querySelectorAll(".list ul li");
let box=document.querySelectorAll(".box")
let element=document.querySelector(".element")
let detailsSection=document.querySelector(".details")
let greetingSec=document.querySelector(".greeting-sec")
let pngImage=document.querySelector(".png-image")
let greetingText=document.querySelectorAll(".greeting-text")
let saveBtn=document.querySelector(".save-btn")
let editBtn=document.querySelector(".edit-btn")
let colors=document.querySelectorAll(".color")

let sources=["assets/lily.jpg","assets/foliage.png","assets/ribbon.png","assets/template.png"]

let colorSources=[
    ["assets/lily.jpg","assets/lily2.png","assets/lily3.png"],
    ["assets/foliage.jpg","assets/foliage2.png","assets/foliage3.jpg"],
    ["assets/ribbon.jpg","assets/ribbon2.png","assets/ribbon3.jpg"],
    ["assets/template.png","assets/template2.png","assets/template3.png"],
]

let elements=[
    {
        heading:"FLOWERS",
        details:[
        ["FLOWER","Lily"],
        ["FRESHNESS (VASE LIFE)","5-7 Days"],
        ["SEASONALITY","May-July"],
        ["SCENT","Highly fragrant"]
        ]
    },
    {
        heading:"FOLIAGE",
        details:[
        ["FOLIAGE","Ruscus"],
        ["FRESHNESS (VASE LIFE)","2-3 Weeks"],
        ["SEASONALITY","Evergreen"],
        ["SCENT","Scentless"]
        ]
    },
    {   heading:"RIBBON",
        details:[
        ["RIBBON","Satin Ribbon"],
        ["MATERIAL","Satin (Polyster-based)"],
        ["WIDTH","1 to 1.5 inches"],
        ["TEXTURE","Silky and Smooth"]
        ]
    },
    {
        heading:"GREETING CARD",
    }
]

function saveGreetings() {
    greetingText.forEach((ele,key)=> {
        if(ele.value!=="")
            ele.disabled=true
    })
}

function editGreetings() {
    greetingText.forEach((ele,key)=> {
            ele.disabled=false
    })
}

function colorChange() {
    colors.forEach((color)=> {
        color.classList.remove("color-selected")
    })
}

const changeElement=(key)=> {
    element.innerText=elements[key].heading
    pngImage.src=sources[key]

    colorChange()
    colors[0].classList.add("color-selected")

    if(key===3) {
        detailsSection.classList.add("hidden")
        greetingSec.classList.remove("hidden")

        saveBtn.addEventListener("click",()=> {
            saveGreetings();
        })

        editBtn.addEventListener("click",()=> {
            editGreetings();
        })
    }
    else {
        detailsSection.classList.remove("hidden")
        greetingSec.classList.add("hidden")
        box.forEach((val,key1)=> {
            val.children[0].innerText=(elements[key].details)[key1][0]
            val.children[1].innerText=(elements[key].details)[key1][1]
        })
    }
    colors.forEach((val,idx)=> {
        val.addEventListener("click",()=>{
            pngImage.src=(colorSources[key])[idx]

            colorChange()
            val.classList.add("color-selected")
        })
    })
}

listItems.forEach((item,key)=> {
    item.addEventListener("click",()=> {
        listItems.forEach((val)=> {
            val.classList.remove("clicked")
        })
        item.classList.add("clicked")
        changeElement(key)
    })
})

document.addEventListener("DOMContentLoaded",()=> {
    listItems[0].classList.add("clicked")
    changeElement(0)
})