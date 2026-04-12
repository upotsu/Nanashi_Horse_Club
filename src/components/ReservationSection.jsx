import { useMemo, useState } from 'react'
import Calendar from 'react-calendar'

const timeSlots = ['09:00', '10:30', '13:00', '15:00', '16:30']
const courses = ['初回体験コース', '親子体験コース', '屋内馬場コース']

export default function ReservationSection() {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(timeSlots[0])
  const [course, setCourse] = useState(courses[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [memo, setMemo] = useState('')

  const formattedDate = useMemo(() => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}/${m}/${d}`
  }, [date])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`予約内容\n日付: ${formattedDate}\n時間: ${time}\nコース: ${course}\n氏名: ${name}`)
  }

  return (
    <section id="reservation" className="section reservation-section">
      <div className="section-heading">
        <p className="eyebrow">Reservation</p>
        <h2>予約</h2>
      </div>

      <div className="reservation-layout">
        <div className="calendar-panel">
          <p className="calendar-panel__lead">ご希望日を選択してください</p>
          <Calendar minDate={new Date()} onChange={setDate} value={date} />
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>
            日付
            <input type="text" value={formattedDate} readOnly />
          </label>

          <label>
            時間
            <select value={time} onChange={(e) => setTime(e.target.value)}>
              {timeSlots.map((slot) => <option key={slot}>{slot}</option>)}
            </select>
          </label>

          <label>
            コース
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              {courses.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>

          <label>
            氏名
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="山田 太郎" />
          </label>

          <label>
            メールアドレス
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sample@example.com" />
          </label>

          <label>
            備考
            <textarea rows="4" value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="ご質問やご要望があればご記入ください。" />
          </label>

          <button className="reserve-button" type="submit">この内容で予約する</button>
        </form>
      </div>
    </section>
  )
}
