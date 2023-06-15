import { useState, useEffect } from 'react'

export const useDateCalc = ({ day, month, year }) => {
  const [mytime, setMytime] = useState({})

  useEffect(() => {
    const today = new Date()

    const inputDay = !day ? today.getDate() : day
    const inputMonth = !month ? today.getMonth() : month
    const inputYear = !year ? today.getFullYear() : year

    const birth = new Date(inputYear, inputMonth, inputDay)
    const daysXYear = 365.25

    console.log(year)

    const life = today.getTime() - birth.getTime()

    const elapsedHours = life / 3600000
    const elapsedDays = elapsedHours / 24

    const years = elapsedDays / daysXYear
    const months = ((elapsedDays % daysXYear) / daysXYear) * 12
    const days = ((months % 1) * daysXYear) / 12

    const tempTime = {
      years: Math.floor(years),
      months: Math.floor(months),
      days: Math.round(days)
    }

    setMytime(tempTime)

    console.log(`${tempTime.years} years`)
    console.log(`${tempTime.months} months`)
    console.log(`${tempTime.days} days`)
  }, [day, month, year])

  return { mytime }
}
