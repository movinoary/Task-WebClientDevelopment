let name = "Vino Arystio"
name = name.split(" ")
let results = []

for(let i=0; i < name.length; i++){
  let initial = name[i].split("")
  initial = initial[0]
  results.push(initial)
}

results = results.join("") // hasil : VA
