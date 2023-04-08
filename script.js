const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS =['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll(".key")
const whitekeys =document.querySelectorAll(".key.white")
const blackkeys =document.querySelectorAll(".key.black")

keys.forEach(key=>{
    key.addEventListener('click',()=> playNote(key))
})

document.addEventListener('keydown', (e)=>{
    if(e.repeat) return  //e.repeat means if it have repeated calls
    const key = e.key
    const whitekeyIndex = WHITE_KEYS.indexOf(key)
    const blackkeyIndex = BLACK_KEYS.indexOf(key)

// The indexOf() method returns the first index (position) of a specified value. The indexOf() method returns -1 if the value is not found. The indexOf() method starts at a specified index and searches from left to right. By default the search starts at the first element and ends at the last.

if(whitekeyIndex > -1) playNote(whitekeys[whitekeyIndex])
if(blackkeyIndex > -1) playNote(blackkeys[blackkeyIndex])
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', ()=>{
        key.classList.remove('active') 
    })

}
