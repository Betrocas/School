const logOut = ()=>{
    if(localStorage.getItem("JWT")!=undefined){
        localStorage.removeItem("JWT");
        if(localStorage.getItem("rol")!=undefined)localStorage.removeItem("rol");
        if(localStorage.getItem("id")!=undefined)localStorage.removeItem("id");
    }
}
export default logOut;