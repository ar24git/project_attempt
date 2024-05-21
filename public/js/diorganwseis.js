/////////initializing test data 
/////data will be retrieved though a function later
/// for now we try to built a table 

// datepicker
$(document).ready(function(){
    $('#datepicker').datepicker({
        language: 'el'
    });
});


//the following is not used | just for production
var title = "Α ΚΑΤΗΓΟΡΙΑ 1ος Όμιλος (25η αγωνιστική)";
////as if we already retrieved the data

//kanonika eprepe na ginei antitheta
var contentObj = {
    i: 1,
    match : "ΑΡΗΣ ΚΑΛΑΜΑΚΙΟΥ - ΠΑΝΕΡΥΘΡΑΪΚΟΣ",
    pitch : "ΚΑΛΑΜAKIOY ΑΛΙΜΟΥ Β΄",
    day :"Σάββατο",
    date :"09/03/24",
    time : "15:30",
    referee :"ΤΣΑΤΣΟΥΛΗΣ Ι., ΡΟΥΣΣΟΣ Π., ΜΠΑΚΟΓΙΑΝΝΗΣ Γ.",
    result :"1-0"
}

//Object.assign built in method to copy an object
var header = Object.assign({},contentObj);
header.i ="";
header.match = "Αγώνας";
header.pitch = "Γήπεδο";
header.day = "Σάββατο";
header.date = "Ημ/νία";
header.time = "Ώρα";
header.referee = "Διαιτητές";
header.result = "Αποτέλεσμα";
var listO =[];

