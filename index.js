let col=document.getElementById('color_that_enter')
let btn=document.getElementById('sub')
let btn_sum=document.getElementById('sum_2')
let bo=document.querySelector('body')
let para=document.querySelector('#pr')
const Arr_colors = [
  "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White",
  "Gray", "Cyan", "Magenta", "Lime", "Maroon", "Navy", "Olive", "Teal", "Violet", "Indigo",
  "Gold", "Silver", "Coral", "Turquoise", "Beige", "Chocolate", "Crimson", "Lavender", "Plum", "Salmon",
  "Khaki", "Azure", "Mint", "Peach", "Ivory", "Tan", "Tomato", "SkyBlue", "SeaGreen", "ForestGreen",
  "DeepPink", "LightGray", "DarkGray", "MediumBlue", "LightBlue", "DarkBlue", "LightGreen", "DarkGreen", "SandyBrown", "HotPink",
  "DeepSkyBlue", "RoyalBlue", "PaleGreen", "PaleVioletRed", "LightCoral", "MediumSeaGreen", "SlateGray", "MediumOrchid", "LightCyan", "MediumPurple",
  "MediumTurquoise", "DarkRed", "DarkOrange", "DarkGoldenrod", "DarkOliveGreen", "DarkCyan", "DarkKhaki", "DarkMagenta", "DarkSlateGray", "DarkTurquoise",
  "LightPink", "LightSalmon", "LightYellow", "LightSteelBlue", "LightSeaGreen", "LemonChiffon", "Snow", "Honeydew", "Wheat", "Linen",
  "Orchid", "Thistle", "PaleTurquoise", "CornflowerBlue", "MediumVioletRed", "RosyBrown", "Peru", "LightSkyBlue", "MediumSlateBlue", "SpringGreen",
  "MediumAquamarine", "BurlyWood", "DodgerBlue", "AntiqueWhite", "PowderBlue", "Firebrick", "Gainsboro", "OldLace", "SlateBlue", "LightGoldenrodYellow"
];





btn.addEventListener('click', () => {

    bo.style.backgroundColor=col.value
    para.innerText=col.value
    console.log("Enter the color update :",col.value);
    
});


btn_sum.addEventListener('click', () => {

    let b=(Math.floor(Math.random()*100))
    bo.style.backgroundColor=Arr_colors[b]
    para.innerText=Arr_colors[b]
    console.log("Enter the color update :",Arr_colors[b]);


});
