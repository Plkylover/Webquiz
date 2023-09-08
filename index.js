let questionBox = document.querySelector('.question')
let questionCont = document.querySelector('.quiz-container')
let options = document.getElementsByClassName('option')
let lastbox = document.querySelector(".quiz-over")
let awarenum = 0
let aware = []
let score = 0
let choosen = []
let random
let newoptions = Array.from(options)
let questions = [{
  question: "who was first president of india ?",
  option: ["(a) Jawaharlal Nehru", "(b) Rajendra Prasad", "(c) Sardar Vallabhbhai Patel", "(d) Dr. Sarvepalli Radhakrishnan"],
  correct: "ans2",
  cText: "(b) Rajendra Prasad"
},{
  question: "Who is the writer of the book indica ?",
  option: ["(a) Shakespeare", "(b) Aryabhatta", "(c) Megasthenes", "(d) Vishnu gupta"],
  correct: "ans3",
  cText: "(c) Megasthenes"
}, {
  question: "When was first battle of Tarain fought ?",
  option: ["(a) 1526", "(b) 1556", "(c) 1557", "(d) 1191"],
  correct: "ans4",
  cText: "(d) 1191"
}, {
  question: "Who won first battle of Tarain ?",
  option: ["(a) Prithviraj chauhan", "(b) Maharana Pratap", "(c) Chattrapati Shivaji", "(d) Ashoka"],
  correct: "ans1",
  cText: "(a) Prithviraj chauhan"
},{
  question: 'Name the recetly launched programing language which can beat python',
  option: ['(a) Javascript', '(b) Ruby', '(c) Groovy', '(d) Mojo'],
  correct: 'ans4',
  cText: "(d) Mojo"
},{
  question: "Who was the first Prime Minister of India ?",
  option: ["(a) Ramnath kovinda", "(b) Mahatma Gandhi", "(c) Indra Gandhi", "(d) Jawaharlal Nehru"],
  correct: "ans4",
  cText: "(d) Jawaharlal Nehru"
},{
  question: "Who was the first ruler of india ?",
  option: ["(a) Bimbisar", "(b) Ashoka", "(c) Chandra gupta Maurya", "(d) Maharana Sangha"],
  correct: "ans3",
  cText: "(c) Chandra gupta Maurya"
},{
  question: "In which year Babur defeated Ibrahim Lodhi ?",
  option: ["(a) 1526", "(b) 1468", "(c) 1479", "(d) 1867"],
  correct: "ans1",
  cText: "(a) 1526"
},{
  question: 'Who is the father of computer',
  option: ['(a) Charles Darwin', '(b) Charles Babbage', '(c) Ada Lovelace', '(d) Albert Einstein'],
  correct: 'ans2',
  cText: "(b) Charles Babbage"
},{
  question: 'Baby frog is known as _____',
  option: ['(a) Calf', '(b) puppy', '(c) tadpole', '(d) kitten'],
  correct: 'ans3',
  cText: "(c) tadpole"
},{
  question: 'What is the National song of India?',
  option: ['Jan Gan Man...', 'Ae Vatan abad rahe tu', 'Teri mitti me...', 'Vande Mataram'],
  correct: 'ans4',
  cText: "Vande Mataram"
},{
  question: 'Tell the no. of Puranas',
  option: ['(a) 18', '(b) 17', '(c) 4', '(d) 108'],
  correct: 'ans1',
  cText: "(a) 18"
},{
  question: 'Tell the no. of Vedas',
  option: ['(a) 108', '(b) 4', '(c) 18', '(d) 10'],
  correct: 'ans2',
  cText: "(b) 4"
},{
  question: 'No. of shlokas in Bhagwat geeta',
  option: ['(a) 1028', '(b) 18', '(c) 700', '(d) 16108'],
  correct: 'ans3',
  cText: "(c) 700"
}]  
newoptions.forEach((option)=>{
  option.addEventListener('click', ()=>{
    answer()
  })
})
window.addEventListener('load', function(){
  questionPlease()
})
const result = ()=>{
  questionCont.style.display = 'none'
  lastbox.style.display = 'flex'
  lastbox.innerHTML = `<h2>Your score is </h2><br><h2> ${score}/10</h2>`
  if (score <= 5) {
    lastbox.innerHTML += `you should work hard<hr width='100%'>`
  } else {
    lastbox.innerHTML += `your General  knowledge  is  good<hr width='100%'>`
  }
  if (aware.length == 0) {
    lastbox.style.height = `70vw`
  } else {
  let widthp = aware.length * 25
  let swidthp = widthp.toString()
  console.log(typeof widthp)
  lastbox.style.height = `${swidthp}vh`
  lastbox.innerHTML += `<h3>Wrong Answers : </h3>`
  for (let i = 0; i < aware.length; i++) {
    lastbox.innerHTML += `<h4>Q. ${aware[i].Tquestion}</h4><br>`
    lastbox.innerHTML += `<h4>your answer: ${aware[i].userans}</h4>`
    lastbox.innerHTML += `<h4>correct answer: ${aware[i].cans}</h4><br>`
  }
  }
}
const questionPlease = () =>{
   let i = 0
  do {
    random = Math.floor(Math.random()*10)
  } while (choosen.includes(random) && choosen.length < 10);
  questionBox.innerHTML = questions[random].question
  newoptions.forEach((optionP)=>{
    optionP.innerHTML = questions[random].option[i]
    i++
  })
}
const answer = ()=>{
  let id = event.currentTarget.id
  let sure = questions[random].correct==id
  if (sure) {
    score++
  }
  else{ 
    aware[awarenum] = new Object()
    aware[awarenum].Tquestion = questions[random].question
    aware[awarenum].userans = event.currentTarget.innerHTML
    aware[awarenum].cans = questions[random].cText
    awarenum++
  }
  if (choosen.length == 9) {
     result()
  }
  choosen.push(random)
  questionPlease()
  }
