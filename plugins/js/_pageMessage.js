// On enter in mseesage box
document.getElementById("msgTextarea")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      appendMsg()
    }
});


// Append Msg function
function appendMsg() {
    // $('#msgPost').append($( '<div class="bg-msg bg-you float-left bg-primary"> <p> <?php echo date("h:i a");?> </p>' +'#msgTextarea' + '</div>').val());
    $('#msgPost').append(('<br> <div class="col-sm-9 offset-3 bg-msg bg-you float-right text-left"> <p> Just now </p>')+$('#msgTextarea').val()+('</div>'));
    $("#msgTextarea").val("");

    bottomScroll();

}

function bottomScroll() {

	var objDiv = document.getElementById("msg-individual");
	objDiv.scrollTop = objDiv.scrollHeight;

}