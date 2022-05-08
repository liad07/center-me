class center1 extends HTMLElement {
    constructor() {
        super();
        var x = this.style;
     /*   var width = screen.availWidth;
        var t = width /2;
        console.log(width)
        x.marginLeft=t+"px";
     */
        const myArray = this.textContent.split("/n");
        var b=10;
        for (var i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
            if (i==0){
                this.textContent=myArray[i];
                document.write("<br>");

            }
            else {
                this.textContent+=myArray[i];
                document.write("<br>");
            }
        }
        x.marginLeft = "49%";

    }
}
customElements.define('center-me',center1)