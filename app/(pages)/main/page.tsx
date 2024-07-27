import Header from "@/app/common/component/Header";
import MainLayout from "@/app/features/main/component/MainLayout";

export default function Page() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <MainLayout />
      </div>
    </>
  );
}
