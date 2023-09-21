import PageWrapper from "@/components/PageWrapper.tsx";
import Header from "@/components/Header.tsx";


function App() {
  return (
      <PageWrapper requireAuth>
        <Header/>
        <h1 className="p-8 text-primary text-3xl">Auth Successful</h1>
      </PageWrapper>
  );
}

export default App;
