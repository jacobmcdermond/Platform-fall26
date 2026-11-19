console.log(document);

function testTheDOM(){ 
    console.log("inside testTheDOM");
    var nodes = document.getElementsByTagName("li");
    console.log(nodes);
    for(let node of nodes) {
        console.log(node);
        console.log(node.innerHTML);
        console.log(node.textContent);
    }
    var cbn = document.getElementById("checkingBalance");
    console.log("cbn is "+cbn.textContent);
    //cbn.textContent="CHANGED";
    var cbn_value=parseInt(cbn.textContent);
    cbn_value += 100;
    cbn.textContent=cbn_value;
}

function depositChecking(){

    var balance = document.getElementById("checkingBalance");
    console.log("cbn is "+balance.textContent);
    //cbn.textContent="CHANGED";
    var new_balance=parseInt(balance.textContent, 10);
    new_balance += 100;
    balance.textContent=new_balance;

}

function depositSavings(){
    var balance = document.getElementById("savingsBalance");
    var new_balance=parseInt(balance.textContent, 10);
    balance.textContent=new_balance;
    if(new_balance == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account"
    }
    new_balance +=100;
    balance.textContent=new_balance;
    
}

function emptySavings() {
    
    var td = document.getElementById("savingsBalance");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    title.textContent="Alert: Savings Empty"

}