import React, { useState, useContext } from 'react'
// import { ReactComponent as Arrow } from '../assets/icon-arrow.svg'
import Arrow from '../assets/icon-arrow.svg'
import InputGroup from './InputGroup'
import Results from './Results'
import Result from './Result'
import Footer from './Footer'
import { useDateCalc } from '../hooks/DateCalc'
import { AgeContext } from '../Context/AgeContext'

const App = () => {
	const [birthday, setBirthday] = useState({})

	const context = useContext(AgeContext)
	const inputRefs = [context.inputDay, context.inputMonth, context.inputYear]

	const {
		mytime: { days, months, years },
	} = useDateCalc(birthday)

	const handleSubmit = e => {
		e.preventDefault()
		if (inputRefs.includes('') || context.inputDay < 1 || context.inputMonth < 1 || context.inputYear < 1) {
			context.setRequired(true)
			return
		}

		const formData = new FormData(e.target)

		const day = formData.get('Day')
		const month = formData.get('Month') - 1
		const year = formData.get('Year')

		setBirthday({ day, month, year })
	}
	return (
		<main className='calculator'>
			<h1 className='hidden'>Age Calculator</h1>
			<form onSubmit={e => handleSubmit(e)}>
				<div className='inputs-container'>
					<InputGroup
						name='Day'
						placeholder='DD'
						id='day'
					/>
					<InputGroup
						name='Month'
						placeholder='MM'
						id='month'
					/>
					<InputGroup
						name='Year'
						placeholder='YYYY'
						id='year'
					/>
				</div>
				<div className='button-container'>
					<button type='submit'>
						<img
							src={Arrow}
							alt=''
						/>
						<span className='hidden'>'calc'</span>
					</button>
				</div>
			</form>
			<Results>
				<Result
					value={years}
					content='years'
				/>
				<Result
					value={months}
					content='months'
				/>
				<Result
					value={days}
					content='days'
				/>
			</Results>

			<Footer />
		</main>
	)
}

export default App
