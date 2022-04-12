document.onkeydown = function (e) {
    //CHAR LIST:
    const charList = ['c', 'j', 'ı']
    if (e.key === "F12" ||
        e.ctrlKey && (e.key == "u" || e.shiftKey && charList.includes(e.key))
    ) return false;
}