import { useState, useEffect } from 'react'

export const useDateCalc = ({ day, month, year }) => {
  const [mytime, setMytime] = useState({})

  useEffect(() => {
    const today = new Date()

    const inputDay = !day ? today.getUTCDate() : day
    const inputMonth = !month ? today.getUTCMonth() : month
    const inputYear = !year ? today.getUTCFullYear() : year

    const birth = new Date(inputYear, inputMonth, inputDay)
    const daysXYear = 365.25

    const life = today.getTime() - birth.getTime()

    const elapsedHours = life / 3600000
    const elapsedDays = elapsedHours / 24

    const years = elapsedDays / daysXYear
    const months = ((elapsedDays % daysXYear) / daysXYear) * 12
    const days = ((months % 1) * daysXYear) / 12

    const tempTime = {
      years: Math.floor(years),
      months: Math.floor(months),
      days: Math.floor(days)
    }

    setMytime(tempTime)
  }, [day, month, year])

  return { mytime }
}

export const useMaxDate = ({ year, month }) => {
  const [maxVal, setMaxVal] = useState({})

  useEffect(() => {
    const today = new Date()
    const inputMonth = !month ? today.getUTCMonth() : month - 1
    const inputYear = !year ? today.getUTCFullYear() : year
    const date = new Date(inputYear, inputMonth, 1)

    date.setMonth(date.getMonth() + 1)
    date.setDate(date.getDate() - 1)

    const days = date.getDate()

    setMaxVal({
      year: today.getUTCFullYear(),
      month: 12,
      day: days
    })
  }, [month, year])

  return { maxVal }
}
