import PageHero from '../components/PageHero'
import InfoCard from '../components/InfoCard'
import { contactAssets } from '../data/assets'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="見学・体験予約前の相談にも使いやすいお問い合わせページ"
        description="必須項目を中心に整理し、クラブサイトの流れを崩さない落ち着いたフォーム画面にしています。"
        image={contactAssets.image}
      />

      <section className="container section contact-layout">
        <InfoCard title="お問い合わせ">
          <form className="contact-form">
            <label>お名前（必須）<input type="text" placeholder="山田 花子" /></label>
            <label>フリガナ（必須）<input type="text" placeholder="ヤマダ ハナコ" /></label>
            <label>電話番号（必須）<input type="tel" placeholder="090-1234-5678" /></label>
            <label>メールアドレス（必須）<input type="email" placeholder="sample@example.com" /></label>
            <label>住所<input type="text" placeholder="東京都〇〇市〇区100-1000" /></label>
            <label>お問い合わせ内容（必須）<textarea rows="6" placeholder="見学希望日やご質問内容をご記入ください。" /></label>
            <button type="button">送信する</button>
          </form>
        </InfoCard>
      </section>
    </>
  )
}
