let questions = [
    {
        question:"1/0",
        answer:[
            {option_1:'infinte',correct:true},
            {option_2:'0',correct:false},
            {option_3:'Not Allowed',correct:false},
            {option_4:'1',correct:false}
        ]
    },
    {
        question:"1+1",
        answer:[
            {option_1:'2',correct:true},
            {option_2:'-2',correct:false},
            {option_3:'1',correct:false},
            {option_4:'0',correct:false}
        ]
    },
    {
        question:"1^0*5+10/2",
        answer:[
            {option_1:'20',correct:false},
            {option_2:'7.5',correct:false},
            {option_3:'6',correct:false},
            {option_4:'10',correct:true}
        ]
    },
    {
        question:"5*2+2",
        answer:[
            {option_1:'02',correct:false},
            {option_2:'20',correct:false},
            {option_3:'12',correct:true},
            {option_4:'None of the above',correct:false}
        ]
    },
    {
        question:"20*1.5",
        answer:[
            {option_1:'35',correct:true},
            {option_2:'45',correct:false},
            {option_3:'25',correct:false},
            {option_4:'50',correct:false}
        ]
    },
    
]
let application = document.querySelector('.application')
let questionPage = document.querySelector('.question');
let answerPage = document.querySelector('.answer-area')
let options = Array.from(document.querySelectorAll('.answer-area .button'))
let nextButton = document.querySelector('.next')
let currentQ = 0;
let score = 0;
let correct=true
let clicked = false
function test(){}
startQuiz();


function startQuiz(){
    questionPage.innerHTML = `(${currentQ+1}) ${questions[currentQ].question}`
    questions[currentQ].answer.forEach((ele,ind)=>{
    document.querySelector(`.option-${ind+1}`).innerHTML = Object.values(ele)[0];
    })
    selectAnswer();
}

function selectAnswer(){
    options.forEach((select,index)=>{

            select.addEventListener('click',function test (ans){
                correct = Object.values(questions[currentQ].answer[index])[1];  // get the frue and false from asnwers 
                if(ans.target.classList.contains('disable'))
                    clicked=false
                else
                    clicked=true
                if(clicked==true){{
                        if(correct==true)
                        {  ans.target.classList.add('pass')
                            score++
                            disable()
                            ans.target.classList.remove('no-hover')
                        }
                else
                        {ans.target.classList.add('fail');
                        disable()
                        ans.target.classList.remove('no-hover')
                        }
                        clicked=true;
                    nextButton.style.display='block'
                }}
                
            })

    })
    nextButton.addEventListener('click',function(){
        nextQ()
        clicked=false
    })
}
function nextQ(){
    if(currentQ == questions.length-1)
    {console.log(currentQ,'if')
        result()}
    else{
        currentQ++
        console.log(currentQ,'else',questions.length)
    questionPage.innerHTML = `(${currentQ+1}) ${questions[currentQ].question}`
    questions[currentQ].answer.forEach((ele,ind)=>{
    document.querySelector(`.option-${ind+1}`).innerHTML = Object.values(ele)[0];
    document.querySelector(`.option-${ind+1}`).classList.remove('pass','fail','disable','no-hover')
    })
    }

    nextButton.style.display='none'
        
}

function disable(){
    options.forEach((opt)=>{
        opt.classList.add('disable')
        opt.classList.add('no-hover')
        clicked=false
    })
}

function result() {
  while(answerPage.firstChild){
    answerPage.removeChild(answerPage.firstChild)
  }
  document.querySelector('.title').innerHTML='Score';
  let yourResult = `Your result is ${score} of ${questions.length}`;
  let h3Result = document.createElement('h3');
  h3Result.textContent = yourResult
  answerPage.appendChild(h3Result)
}






