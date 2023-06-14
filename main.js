// const imgInput = document.querySelector('#img-select');
// const imgPreview = document.querySelector('.preview');

// if(!window.EyeDropper) {
//     alert("Your browser doesnot support this feature.")
// }

// const eyeDropper = new EyeDropper();
// const pickerBtn = document.querySelector('.open-picker');
// const result = document.querySelector('.res');

// imgInput.addEventListener('change', function(){
//     const file = this.files[0];
//     if(!file) return;
//     const reader = new FileReader();
//     reader.addEventListener('load', function() {
//         imgPreview.src = this.result;
//     })
//     reader.readAsDataURL(file);
// });
// pickerBtn.addEventListener('click', function() {
//     eyeDropper.open()
//         .then(res=>{
//             result.innerHTML = `Picked color: <b>${res.sRGBHex}</b>`
//         }).catch(err=>{
//             console.log("user cancelled the selection.")
//         })
// })

const imgInput = $('#img-select');
const imgPreview = $('.preview');

if(!window.EyeDropper) {
    alert("Your browser doesnot support this feature.")
}

const eyeDropper = new EyeDropper();
const pickerBtn = $('.open-picker');
const result = $('.res');

imgInput.on('change', function(){
    const file = this.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function() {
        imgPreview.attr('src', this.result);
    }
    reader.readAsDataURL(file);
});
pickerBtn.on('click', function() {
    eyeDropper.open()
        .then(res=>{
            result.html(`Picked color: <b>${res.sRGBHex}</b>`)
        }).catch(err=>{
            console.log("user cancelled the selection.")
        })
})