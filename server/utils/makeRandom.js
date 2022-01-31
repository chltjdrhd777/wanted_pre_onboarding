module.exports = {
    makeRandom:(length)=>{
        if(length )
        const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = "";

        for(let i = 0; i<length; i++){
            result+= charList.charAt(Math.floor(Math.random() * charList.length));
        }

        return result;
    }
}