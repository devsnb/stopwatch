// Interval in milliseconds to update the stopwatch. The stopwatch is updated every 10 milliseconds in the DOM
const INTERVAL = 10

// Select the html elements for displaying the stopwatch
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const tens = document.querySelector('#tens')

// Select the buttons to start, stop and reset the stopwatch
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')

// Variables for keeping track of the time elapsed
let current_minutes = 0
let current_seconds = 0
let current_tens = 0

// variable for keeping track of the current timer/interval
let Interval = null

/**
 * keeps track of the elapsed time with the help of the previously defined variables and updates the DOM accordingly
 */
const startTimer = () => {
	// 1 current_tens = 1/10th of a second
	// As the timer runs every 10 milliseconds or 1/10 th of a second we increment the current tens by 1
	current_tens++

	// When the tens is less than 99 it still can be represented in the unit of 1/10th of a second so we update the DOM accordingly
	if (current_tens <= 9) {
		tens.textContent = '0' + current_tens
	}

	if (current_tens > 9) {
		tens.textContent = current_tens
	}

	if (current_tens > 99) {
		// when the current_tens is greater than 99 more specifically 100 one second has elapsed so we increment the current_second
		current_seconds++
		current_tens = 0
		tens.textContent = '0' + 0
	}

	if (current_seconds <= 9) {
		seconds.textContent = '0' + current_seconds
	}

	if (current_seconds > 9) {
		seconds.textContent = current_seconds
	}

	if (current_seconds > 59) {
		current_minutes++
		minutes.textContent = '0' + current_minutes
		current_seconds = 0
		seconds.textContent = '0' + 0
	}
}

/**
 * Resets the timer and the DOM to it's original state
 */
const resetTimerHandler = () => {
	// clear the existing interval
	clearInterval(Interval)

	// Set the values to initial values
	current_tens = 0
	current_seconds = 0
	current_minutes = 0

	// reset the the values in the DOM
	tens.textContent = '00'
	seconds.textContent = '00'
	minutes.textContent = '00'
}

/**
 * Clears the existing interval and starts a new one
 */
const startTierHandler = () => {
	// clear the existing interval
	clearInterval(Interval)

	// starts the new interval
	Interval = setInterval(startTimer, INTERVAL)
}

/**
 * Just clears the existing interval
 */
const pauseTimerHandler = () => {
	clearInterval(Interval)
}

// When start button is clicked
startBtn.addEventListener('click', startTierHandler)

// when pause button is clicked
pauseBtn.addEventListener('click', pauseTimerHandler)

// when reset button is clicked
resetBtn.addEventListener('click', resetTimerHandler)
