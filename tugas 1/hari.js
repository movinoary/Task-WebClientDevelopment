const startDate: Date = new Date("2025-02-20")
const endDate: Date = new Date("2025-02-25")

let betweenDate: number = endDate.getTime() - startDate.getTime()
betweenDate = betweenDate / (1000 * 3600 * 24) // hasil: 5
