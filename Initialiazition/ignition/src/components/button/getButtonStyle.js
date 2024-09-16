
function getButtonStyle(buttonType){
    if(buttonType==='primary'){
        return `w-20 h-12 p-2 bg-blue-500 text-black text-bold`
    }else if(buttonType==='secondary'){
        return `w-20 h-12 p-2 bg-gray-500 text-black text-bold`
    }else if(buttonType==='success'){
        return `w-20 h-12 p-2 bg-green-500 text-black text-bold`
    }else if(buttonType==='warning'){
        return `w-20 h-12 p-2 bg-yellow-500 text-black text-bold`
    }else if(buttonType==='danger'){
        return `w-20 h-12 p-2 bg-orange-500 text-black text-bold`
    }else if(buttonType==='error'){
        return `w-20 h-12 p-2 m-2 bg-red-500 text-black text-bold`
    }
}

export default getButtonStyle