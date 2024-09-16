

function getTextInputStyle(size){
    if(size==='small'){
        return `w-40 h-12 pl-3 b-black rounded-xl`
    }else if(size==='medium'){
        return `w-60 h-12 pl-3 b-black rounded-xl`
    }else if(size==='large'){
        return `w-96 h-12 pl-3 b-black rounded-xl`
    }else if(size==='extraLarge'){
        return `w-[440px] h-12 pl-3 b-black rounded-2xl`
    }
}

export default getTextInputStyle