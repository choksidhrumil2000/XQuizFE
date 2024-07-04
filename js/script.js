// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

document.body.style.backgroundImage = "radial-gradient(circle, blue, purple, pink)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.padding = "50px";

let quizContainer = document.querySelector(".quiz-container");
quizContainer.style.backgroundColor = "white";
quizContainer.style.border = "1px solid grey";
quizContainer.style.textAlign = "center";
quizContainer.style.width = "365px";
quizContainer.style.padding="50px";

let question = document.getElementById("question");
question.innerHTML = questions[0].text;

let answerList = document.getElementById("answer-list");
answerList.style.listStyleType = "none";
answerList.style.textAlign = "left";
answerList.style.paddingLeft = "50px";
// let str = "";


function createQuestion(answerList,index){
    question.innerHTML = questions[index].text;
    for(let i=0;i<questions[index].options.length;i++){
        let li = document.createElement("li");
        li.style.marginTop = "10px";
        
        let input = document.createElement("input");
        input.setAttribute("type","radio");
        input.setAttribute("id","option" + (i+1));
        input.setAttribute("name","o1");
        input.setAttribute("value",questions[index].options[i]);
    
        let label = document.createElement("label");
        label.setAttribute("for","option" + (i+1));
        label.innerText = questions[index].options[i];
    
        li.append(input);
        li.append(label);
        answerList.append(li);
    }
    let all_lis = document.querySelectorAll("li");

all_lis.forEach((li)=>{
    li.addEventListener('mouseover',function (){
        this.style.backgroundColor = "rgb(245, 245, 245)";
        this.style.cursor = "pointer";
    });

    // li.addEventListener('mousemove',function (){
    //     this.style.backgroundColor = "rgb(245, 245, 245)";
    //     this.style.cursor = "pointer";
    // });
    
    li.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
        this.style.cursor = "default";
    });
});
}





let index = 0;

createQuestion(answerList,index);
let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");
nextButton.style.display = "none";

let score = 0;
submitButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Submit button is clicked.
    if(index < questions.length-1){
        submitButton.style.display = "none";
        nextButton.style.display = "inline";
    }else if(index === questions.length-1){
        let str = `Quiz finished! Your score is: ${score}/${questions.length}`;
        alert(str);
        index = 0;
        score=0;
        answerList.innerHTML ="";
        createQuestion(answerList,index);
        return;
    }
    let answer_idx = -1;
    let inputs = document.querySelectorAll("input");
    inputs.forEach((e,i)=>{
        if(e.checked === true){
            answer_idx = i;
        }
    });
    if(answer_idx === -1){
        alert("Please select an answer!");
        return;
    }

    if(questions[index].correct === answer_idx){
        score++;
    }
    let liEles = document.querySelectorAll("li");
    liEles[questions[index].correct].style.backgroundColor = "rgb(144, 238, 144)";
});

nextButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Next button is clicked.
    nextButton.style.display = "none";
    submitButton.style.display = "inline";
    index++;
    answerList.innerHTML="";
    createQuestion(answerList,index);    
});
