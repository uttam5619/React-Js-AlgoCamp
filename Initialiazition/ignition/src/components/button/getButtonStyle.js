
function getButtonStyle(buttonType){
    if(buttonType==='primary'){
        return `min-w-24 h-12 p-2 bg-blue-500 text-black text-bold`
    }else if(buttonType==='secondary'){
        return `min-w-24 h-12 p-2 bg-gray-500 text-black text-bold`
    }else if(buttonType==='success'){
        return `min-w-24 h-12 p-2 bg-green-500 text-black text-bold`
    }else if(buttonType==='warning'){
        return `min-w-24 h-12 p-2 bg-yellow-500 text-black text-bold`
    }else if(buttonType==='danger'){
        return `min-w-24 h-12 p-2 bg-orange-500 text-black text-bold`
    }else if(buttonType==='error'){
        return `min-w-24 h-12 p-2 m-2 bg-red-500 text-black text-bold`
    }
}

export default getButtonStyle