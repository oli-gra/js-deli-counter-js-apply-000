/*function takeANumber (queue,customer) {
  queue.push(customer)
  return "Welcome, "+customer+`. You are number ${queue.length} in line.`
}*/
var customerNum=0

function takeANumber(queue) {
  customerNum+=1
  queue.push(customerNum)
  return "Welcome "+CustomerNum+` You are number ${queue.Length} in line.`
}
  
function nowServing(queue) {
  if (queue.length>0) {
    var customer = queue.shift()
    return `Currently serving ${customer}.`
  } else return "There is nobody waiting to be served!"
}

function currentLine(queue) {
  if (queue.length>0) {
    var customers=""
    for (let i=0;i<queue.length;i++) {
      if (i<queue.length-1) {
        customers+=`${i+1}. ${queue[i]}, `
      } else customers+=`${i+1}. ${queue[i]}`
    }
    return "The line is currently: "+customers
  } else return "The line is currently empty."
}