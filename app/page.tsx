import KakaoMap from '@/components/KakaoMap';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <main
        className="absolute w-screen h-screen left-0 top-0"
        style={{ display: 'absolute', width: '100vw', height: '100vh', left: 0, top: 0 }}
      >
        <KakaoMap />
      </main>
    </div>
  );
}
