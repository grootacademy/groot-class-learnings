console.log("first")

function jitin(a) {

    let b = '';
    
    let i = 1;
    
    while (i <= 10) {
        b = b + i * a + " "; 
        i++;
    }
    
    document.getElementById("tbl").innerHTML = b;
    
    // console.log(a);

    // for (let i = 1; i <= 10; i++) {
    //     console.log(i * 3)
    // }

}


const gaga = () => {

}