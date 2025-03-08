
    function goToNextPage() {
        window.location.href="./nextPage/index.html"
    }
    function backToBoard() {
        window.location.href="index.html"
    }

    function date() {
        const now = new Date();
        const options = {month: "short", day: "numeric", year: "numeric"};
        const formattedDate = now.toLocaleDateString("en-us", options);
        document.getElementById("date").textContent = formattedDate;
    }
        date();


    function changeBG() {
        const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "cyan"];
        const multiColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = multiColor;
        document.getElementById("section").style.backgroundColor = multiColor;
        document.getElementById("section-1").style.backgroundColor = multiColor;
        document.getElementById("section-2").style.backgroundColor = multiColor;
        document.getElementById("section-3").style.backgroundColor = multiColor;
        document.getElementById("section-4").style.backgroundColor = multiColor;
        document.getElementById("section-5").style.backgroundColor = multiColor;
        document.getElementById("section-6").style.backgroundColor = multiColor;
        document.getElementById("section-7").style.backgroundColor = multiColor;
    }
    document.getElementById("theme-btn").addEventListener("click", changeBG);




document.getElementById("completed-btn-01")
    .addEventListener("click", function(){
        // alert 
        alert("Board Updated Successfully")
        // history 
        const div = document.getElementById("divdiye");
        const p = document.createElement('p');
        p.classList.add('abc');
        p.innerText = "You have Complete The Task: Fix Mobile Button Issue at 12:48:15 PM"
        div.parentElement.appendChild(p);
        // task assigned (-)
        
        // disabled
        document.getElementById("completed-btn-01").disabled = true  
        
                // task assigned (-)
                const taskNumber = document.getElementById("task-number").innerText;
                const convertedTaskNumber = parseInt(taskNumber);
                const biyog = convertedTaskNumber - 1;
                document.getElementById("task-number").innerText = biyog;
        
        
                // Score Point (+)
                const scorePoint = document.getElementById("score-point").innerText;
                const conververtedScore = parseInt(scorePoint);
                const jog = conververtedScore + 1;
                document.getElementById("score-point").innerText = jog;
        
})
document.getElementById("completed-btn-02")
    .addEventListener("click", function(){
        // alert 
        alert("Board Updated Successfully")
        // history 
        const div = document.getElementById("divdiye");
        const p = document.createElement('p');
        p.classList.add('abc');
        p.innerText = "You have Complete The Task: Add Dark Mode at 12:48:15 PM"
        div.parentElement.appendChild(p);
        // task assigned (-)
        
        // disabled
        document.getElementById("completed-btn-02").disabled = true   
        
                // task assigned (-)
                const taskNumber = document.getElementById("task-number").innerText;
                const convertedTaskNumber = parseInt(taskNumber);
                const biyog = convertedTaskNumber - 1;
                document.getElementById("task-number").innerText = biyog;
        
        
                // Score Point (+)
                const scorePoint = document.getElementById("score-point").innerText;
                const conververtedScore = parseInt(scorePoint);
                const jog = conververtedScore + 1;
                document.getElementById("score-point").innerText = jog;
        
})
document.getElementById("completed-btn-03")
    .addEventListener("click", function(){
        // alert 
        alert("Board Updated Successfully")
        // history 
        const div = document.getElementById("divdiye");
        const p = document.createElement('p');
        p.classList.add('abc');
        p.innerText = "You have Complete The Task: Optimize  Home page at 12:48:15 PM"
        div.parentElement.appendChild(p);
        // task assigned (-)
        
        // disabled
        document.getElementById("completed-btn-03").disabled = true  
        
                // task assigned (-)
                const taskNumber = document.getElementById("task-number").innerText;
                const convertedTaskNumber = parseInt(taskNumber);
                const biyog = convertedTaskNumber - 1;
                document.getElementById("task-number").innerText = biyog;
        
        
                // Score Point (+)
                const scorePoint = document.getElementById("score-point").innerText;
                const conververtedScore = parseInt(scorePoint);
                const jog = conververtedScore + 1;
                document.getElementById("score-point").innerText = jog;
        
})
document.getElementById("completed-btn-04")
    .addEventListener("click", function(){
        // alert 
        alert("Board Updated Successfully")
        // history 
        const div = document.getElementById("divdiye");
        const p = document.createElement('p');
        p.classList.add('abc');
        p.innerText = "You have Complete The Task: Add new emoji🤲 at 12:48:15 PM"
        div.parentElement.appendChild(p);
        // task assigned (-)
        
        // disabled
        document.getElementById("completed-btn-04").disabled = true    
        
                // task assigned (-)
                const taskNumber = document.getElementById("task-number").innerText;
                const convertedTaskNumber = parseInt(taskNumber);
                const biyog = convertedTaskNumber - 1;
                document.getElementById("task-number").innerText = biyog;
        
        
                // Score Point (+)
                const scorePoint = document.getElementById("score-point").innerText;
                const conververtedScore = parseInt(scorePoint);
                const jog = conververtedScore + 1;
                document.getElementById("score-point").innerText = jog;
        
})
document.getElementById("completed-btn-05")
    .addEventListener("click", function(){
        // alert 
        alert("Board Updated Successfully")
        // history 
        const div = document.getElementById("divdiye");
        const p = document.createElement('p');
        p.classList.add('abc');
        p.innerText = "You have Complete The Task: Integrate OpenAI API at 12:48:15 PM"
        div.parentElement.appendChild(p);
        // task assigned (-)
        
        // disabled
        document.getElementById("completed-btn-05").disabled = true    
        
                // task assigned (-)
                const taskNumber = document.getElementById("task-number").innerText;
                const convertedTaskNumber = parseInt(taskNumber);
                const biyog = convertedTaskNumber - 1;
                document.getElementById("task-number").innerText = biyog;
        
        
                // Score Point (+)
                const scorePoint = document.getElementById("score-point").innerText;
                const conververtedScore = parseInt(scorePoint);
                const jog = conververtedScore + 1;
                document.getElementById("score-point").innerText = jog;
        
})
document.getElementById("completed-btn-06")
    .addEventListener("click", function(){
        // alert 
        alert("Board Updated Successfully")
        alert("Second Alert Board Updated Successfully")
        // history 
        const div = document.getElementById("divdiye");
        const p = document.createElement('p');
        p.classList.add('abc');
        p.innerText = "You have Complete The Task: Improve Job searching  at 12:48:15 PM"
        div.parentElement.appendChild(p);
        // disabled
        document.getElementById("completed-btn-06").disabled = true      

        // task assigned (-)
        const taskNumber = document.getElementById("task-number").innerText;
        const convertedTaskNumber = parseInt(taskNumber);
        const biyog = convertedTaskNumber - 1;
        document.getElementById("task-number").innerText = biyog;


        // Score Point (+)
        const scorePoint = document.getElementById("score-point").innerText;
        const conververtedScore = parseInt(scorePoint);
        const jog = conververtedScore + 1;
        document.getElementById("score-point").innerText = jog;
        
        
})