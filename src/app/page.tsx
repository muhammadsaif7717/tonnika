import Banner from "@/components/root/Banner";
import NewProducts from "@/components/root/newProducts";
import ShopByCategories from "@/components/root/shopByCategory";


export default function Home() {
  return (
   <main>
    <Banner/>
    <ShopByCategories/>
    <NewProducts/>
   </main>
  );
}
