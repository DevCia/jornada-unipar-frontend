import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Suspense } from 'react';

function Dashboard() {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<>🌀 Carregando...</>}>
        <div className="container-layout">
          <Outlet></Outlet>
        </div>
      </Suspense>
    </>
  );
}

export default Dashboard;
