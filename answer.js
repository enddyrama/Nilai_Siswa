const scoreIndicator = (name, score) => {
    if (score >= 80 && score <= 100) {
        return `${name} mendapatkan nilai A`
    } else if (score >= 65 && score <= 79) {
        return `${name} mendapatkan nilai B`
    } else if (score >= 50 && score <= 64) {
        return `${name} mendapatkan nilai C`
    } else if (score >= 35 && score <= 49) {
        return `${name} mendapatkan nilai D`
    } else if (score >= 0 && score <= 34) {
        return `${name} mendapatkan nilai E`
    } else {
        return 'Nilai Invalid'
    }
}






console.log(scoreIndicator('Rocky', 90))
console.log(scoreIndicator('Lanang', 70))
console.log(scoreIndicator('Prom', 60))
console.log(scoreIndicator('Bitch', 45))
console.log(scoreIndicator('Dana', 30))
console.log(scoreIndicator('Boi', 101))
console.log(scoreIndicator('Boi', -1))