//Accordion animations
$(function(){
    $("#headerOne").click(function(){
        if ($("#collapseOne").attr("class").includes("show")){
            console.log("TRUE");
            $("#collapseOne").attr("class", "accordion-collapse collapse");
        } else{
            console.log("FALSE");
            $("#collapseOne").attr("class", "accordion-collapse collapse show");
        }
    })
});
$(function(){
    $("#headerTwo").click(function(){
        if ($("#collapseTwo").attr("class").includes("show")){
            $("#collapseTwo").attr("class", "accordion-collapse collapse");
        } else{
            $("#collapseTwo").attr("class", "accordion-collapse collapse show");
        }
    })
});
$(function(){
    $("#headerThree").click(function(){
        if ($("#collapseThree").attr("class").includes("show")){
            $("#collapseThree").attr("class", "accordion-collapse collapse");
        } else{
            $("#collapseThree").attr("class", "accordion-collapse collapse show");
        }
    })
});

//Dropdown Animation
// $(function(){
//     $("#dropdown").click(function(){
//         $(".dropdown-content").attr("display","block");
//     }, function(){})
// });
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })