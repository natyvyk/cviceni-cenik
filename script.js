const selectPlan = (planNumber) => {
    const elPrvniPlan = document.querySelector("#plan1")
    const elDruhyPlan = document.querySelector("#plan2")
    const elTretiPlan = document.querySelector("#plan3")
    if (planNumber === 1) {
        elPrvniPlan.classList.add("plan--selected")
        elDruhyPlan.classList.remove("plan--selected")
        elTretiPlan.classList.remove("plan--selected")
    } 
    if (planNumber === 2) {
        elDruhyPlan.classList.add("plan--selected")
        elPrvniPlan.classList.remove("plan--selected")
        elTretiPlan.classList.remove("plan--selected")
    } 
    if (planNumber === 3) {
        elTretiPlan.classList.add("plan--selected")
        elPrvniPlan.classList.remove("plan--selected")
        elDruhyPlan.classList.remove("plan--selected")
} }

selectPlan(3)
selectPlan(2)