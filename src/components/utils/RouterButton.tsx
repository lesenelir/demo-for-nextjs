import {useRouter} from "next/router"

function RouterButton() {
  const router = useRouter()

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    }}>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  )
}

export default RouterButton
