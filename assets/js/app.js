//Runs javascript after html has loaded
$(document).ready(function(){
    var totalCorrect = 0;
    var totalIncorrect = 0;
    var totalUnanswered = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 6;
    var running = false;
    var time = 0;
    var intervalId;

    // Hides the elements with ID's "timer" and "question1" as well as all child elements
    var hider = () => {
        $("#timer").hide();
        $(".question").hide();
        $("#done").hide();
        $("#resultPage").hide();
    };
    hider();

    // Removes start button and shows timer and question1 ID elements with all child elements within when start button is clicked and runs timer function
    var displayer = () => {
        $("#start").on("click", function(){
            $("#start").remove();
            $("#timer").text("00:00");
            $("#timer").show();
            $(".question").show();
            $("#done").show();
            timeStart();
        });


        // Starts the timer
        var timeStart = () => {
            if(!running){
                intervalId = setInterval(counter, 1000);
                running = true;
            }
        };


        // Stops the time
        var stop = () => {
            clearInterval(intervalId);
            running = false;
        };


        // Counts the time
        var counter = () => {
            time++;

            if(time === 6000){
                console.log("yo");
                stop();
                $("#timer").hide();
                $(".question").hide();
                $("#done").hide();
                $("#resultPage").show();
                calculateScore();
            }
            var converted = converter(time);

            $("#timer").text(converted);
        };


        // Time converter
        var converter = (t) => {
            var minutes = Math.floor(t/60);
            var seconds = t - (minutes * 60);
            
            if(seconds < 10){
                seconds = "0" + seconds;
            }

            if(minutes === 0){
                minutes = "00";
            }else if(minutes < 10){
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        };
        
        // Done button
        $("#done").on("click", function(){
            $("#timer").hide();
            $(".question").hide();
            $("#done").hide();
            $("#resultPage").show();
            stop();
            calculateScore();
        });
    };
    displayer();

    //Calculate the score
    var calculateScore = () => {

        if($("input[name='q1']:checked").val() === "agera"){
            correct++;
            unanswered--;
        }else if($("input[name='q1']:checked").val() !== "agera"){
            incorrect++;
            unanswered--;
        }

        if($("input[name='q2']:checked").val() === "bugatti"){
            correct++;
            unanswered--;
        }else if($("input[name='q2']:checked").val() !== "bugatti"){
            incorrect++;
            unanswered--;
        }

        if($("input[name='q3']:checked").val() === "svj"){
            correct++;
            unanswered--;
        }else if($("input[name='q3']:checked").val() !== "svj"){
            incorrect++;
            unanswered--;
        }

        if($("input[name='q4']:checked").val() === "eleanor"){
            correct++;
            unanswered--;
        }else if($("input[name='q4']:checked").val() !== "svj"){
            incorrect++;
            unanswered--;
        }

        if($("input[name='q5']:checked").val() === "mustang"){
            correct++;
            unanswered--;
        }else if($("input[name='q5']:checked").val() !== "mustang"){
            incorrect++;
            unanswered--;
        }

        if($("input[name='q6']:checked").val() === "modelS" || $("input[name='q6']:checked").val() === "modelX" || $("input[name='q6']:checked").val() === "model3" || $("input[name='q6']:checked").val() === "roadster"){
            correct++;
            unanswered--;
        }else{
            unanswered--;
        }

        totalCorrect = correct;
        totalIncorrect = incorrect;
        totalUnanswered = unanswered;

        $("#correct").text(totalCorrect);
        $("#incorrect").text(totalIncorrect);
        $("#unanswered").text(totalUnanswered);
        
    }




});










