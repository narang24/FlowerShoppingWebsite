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
    ["assets/foliage.png","assets/foliage2.png","assets/foliage3.png"],
    ["assets/ribbon.png","assets/ribbon2.png","assets/ribbon3.jpg"],
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
        ],
        colorHex:["#eeddcc","#e3b100","#dc5000"]
    },
    {
        heading:"FOLIAGE",
        details:[
        ["FOLIAGE","Ruscus"],
        ["FRESHNESS (VASE LIFE)","2-3 Weeks"],
        ["SEASONALITY","Evergreen"],
        ["SCENT","Scentless"]
        ],
        colorHex:["#5b6d44","#344812","#80763f"]
    },
    {   heading:"RIBBON",
        details:[
        ["RIBBON","Satin Ribbon"],
        ["MATERIAL","Satin (Polyster-based)"],
        ["WIDTH","1 to 1.5 inches"],
        ["TEXTURE","Silky and Smooth"]
        ],
        colorHex:["#9f6450","#ddb293","#dc5000"]
    },
    {
        heading:"GREETING CARD",
        colorHex:["#d9c8a9","#f9c799","#dc5000"]
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

// function colorHexChange(key,idx) {
//     colors.forEach((color)=> {
//       color.classList.add(`bg-[${elements[key].colorHex[idx]}]`)
//     })
// }

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
            // colorHexChange(key,idx)

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