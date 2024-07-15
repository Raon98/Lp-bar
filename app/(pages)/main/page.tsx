import Header from "@/app/common/component/Header";
import MainLayout from "@/app/features/main/component/MainLayout";

export default function Page() {
  const func = {
    onDragEnd : (res?: any) => {
      console.log(res)
    }
  }
  return (
    <>
        <Header />
        <MainLayout />
    </>
  );
}
