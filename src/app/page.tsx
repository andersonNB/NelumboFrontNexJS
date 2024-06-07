import { HomePage } from "./pages/Home/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      {/* TODO: Acomodar las rutas */}
      <HomePage />
      <div className="h-[190px] 
      absolute 
      flex
      right-[-55px] 
      top-[-55px] 
      w-[190px] 
      z-[1] 
      bg-gradient-to-br from-[#FFD300] to-[#B89E22]  
      p-[30px]   
      rounded-[50%]
      justify-end
      items-center
       flex-col
       shadow-[5px]
       text-white
       "
       style={{transform:'matrix(0.71, 0.71, -0.71, 0.71, 0, 0)', boxShadow:'5px 8px 5px #00000029'}}
       >
        <h2>COMPRA A</h2>
        <h1 className="text-[25px]">CRÉDITO</h1>
      </div>
    </main>
  );
}
