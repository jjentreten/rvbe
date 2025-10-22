"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const endOfDay = new Date()
      endOfDay.setHours(23, 59, 59, 999)

      const difference = endOfDay.getTime() - now.getTime()

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-black via-pink-600 to-orange-500 rounded-2xl p-4 md:p-6 mb-6 shadow-lg">
      <div className="text-center text-white">
        <h2 className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-semibold">Essa oferta acabará em:</h2>

        <div className="flex items-center justify-center gap-2 md:gap-3">
          {/* Hours */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm">
            <div className="text-2xl md:text-3xl lg:text-4xl text-card-foreground font-semibold">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm opacity-90 text-card-foreground font-mono font-medium">Horas</div>
          </div>

          <div className="text-xl md:text-2xl lg:text-3xl font-bold opacity-75 text-card-foreground">:</div>

          {/* Minutes */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm">
            <div className="text-2xl md:text-3xl lg:text-4xl text-card-foreground font-semibold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-medium opacity-90 text-card-foreground font-mono">Min</div>
          </div>

          <div className="text-xl md:text-2xl lg:text-3xl font-bold opacity-75 text-card-foreground">:</div>

          {/* Seconds */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm">
            <div className="text-2xl md:text-3xl lg:text-4xl text-card-foreground font-semibold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-medium opacity-90 text-card-foreground font-mono">Seg</div>
          </div>
        </div>
      </div>
    </div>
  )
}
