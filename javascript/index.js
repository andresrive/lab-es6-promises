// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.getElementById("mashedPotatoesImg").removeAttribute('hidden')
        })
      })
    })
  })
})

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
    document.getElementById("steakImg").removeAttribute('hidden')
    return

  })
  .catch((err) => {
    console.log("ERROR: ", err)
  })


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let bro1 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${bro1}</li>`
    let bro2 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${bro2}</li>`
    let bro3 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${bro3}</li>`
    let bro4 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${bro4}</li>`
    let bro5 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${bro5}</li>`
    let bro6 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${bro6}</li>`
    let bro7 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${bro7}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.getElementById("broccoliImg").removeAttribute('hidden')
  }
  catch (err) {
    console.log("ERROR: ", err)
  }
}

makeBroccoli()

// Bonus 2 - Promise all
let p1 = obtainInstruction('brusselsSprouts', 0)
let p2 = obtainInstruction('brusselsSprouts', 1)
let p3 = obtainInstruction('brusselsSprouts', 2)
let p4 = obtainInstruction('brusselsSprouts', 3)
let p5 = obtainInstruction('brusselsSprouts', 4)
let p6 = obtainInstruction('brusselsSprouts', 5)
let p7 = obtainInstruction('brusselsSprouts', 6)
let p8 = obtainInstruction('brusselsSprouts', 7)


// const instSprouts = [p1, p2, p3, p4, p5, p6, p7, p8, p9]
// console.log(instSprouts)


Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
  .then(result => {
    result.forEach((instruccion) => {
      document.getElementById("brusselsSprouts").innerHTML += `<li>${instruccion}</li>`
    })
    document.getElementById("brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
    document.getElementById("brusselsSproutsImg").removeAttribute('hidden')
  })
  .catch(err => {
    console.log("error", err)
  })