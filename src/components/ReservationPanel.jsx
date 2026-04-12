import { useMemo, useState } from 'react'
import Calendar from 'react-calendar'

const timeSlots = ['10:00', '11:30', '13:00', '14:30']
const plans = ['体験レッスン', 'ビジター騎乗', '会員予約']

export default function ReservationPanel() {
  const [date, setDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(timeSlots[0])
  const [selectedPlan, setSelectedPlan] = useState(plans[0])

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    }).format(date)
  }, [date])

  return (
    <section className="reservation-panel">
      <div>
        <p className="section-eyebrow">Reservation</p>
        <h2>レッスン予約</h2>
        <p className="section-text">
          ご希望の日付を選び、時間帯と予約種別を確認できるサンプル画面です。
          実案件を想定し、カレンダー操作がしやすいUIに整えています。
        </p>
        <div className="reservation-summary">
          <p><span>選択日</span>{formattedDate}</p>
          <p><span>時間</span>{selectedTime}</p>
          <p><span>種別</span>{selectedPlan}</p>
        </div>
      </div>

      <div className="reservation-ui">
        <Calendar onChange={setDate} value={date} locale="ja-JP" />
        <label>
          時間帯
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </label>
        <label>
          予約種別
          <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
            {plans.map((plan) => (
              <option key={plan} value={plan}>{plan}</option>
            ))}
          </select>
        </label>
        <button type="button">この内容で問い合わせる</button>
      </div>
    </section>
  )
}
