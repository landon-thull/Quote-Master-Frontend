const Loading: React.FC = () => {
  return (
      <div className="min-h-screen max-h-screen text-primary bg-background flex justify-center flex-col items-center">
        <h1 className="text-5xl mb-8 font-bold tracking-wider">Quote Master</h1>
        <p className="text-3xl tracking-wider animate-pulse">Loading...</p>
      </div>
  );
}

export default Loading;