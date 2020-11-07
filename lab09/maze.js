
const STATUS  = {NOT_START: 0, STARTED_NOERROR: 1, STARTED_FAIL: 2};
var curStatus = STATUS.NOT_START;

$(document).ready(function() {
    $("#start").click(function(){
        startClick();
      });
    $("#end").mouseenter(function(){
        overEnd();
      });
    $(".boundary").mouseenter(function(){
        overBoundary();
      });
    $("#maze").mouseleave(function(){
        leaveMaze();
      });
});

function overBoundary() {
    if (curStatus == STATUS.NOT_START || curStatus == STATUS.STARTED_FAIL)
        return;
    alert('You just moved your mouse over the #someId element!');    
    // alert("Sorry, you lost. :[");  
    $("h2#status").text('Sorry, you lost. :[');
    curStatus = STATUS.STARTED_FAIL;    
    $(".boundary").addClass("youlose");
}

function startClick() {
    curStatus = STATUS.STARTED_NOERROR;
    $(".boundary").removeClass("youlose");
    $("h2#status").text('Click the "S" to begin.');
}

function overEnd() {
    if (curStatus == STATUS.STARTED_NOERROR){
        // alert("You win! :]");
        $("h2#status").text('You win! :]');
        curStatus = STATUS.NOT_START;
    }
}

function leaveMaze() {
    if (curStatus == STATUS.NOT_START || curStatus == STATUS.STARTED_FAIL)
        return;        
    alert("Cheating....!");
    overBoundary();
}
