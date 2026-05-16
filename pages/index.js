import dynamic from 'next/dynamic'

const PaniniTracker = dynamic(
  () => import('../album_firebase'),
  { ssr: false }
)

export default function Home() {
  return <PaniniTracker />
}
