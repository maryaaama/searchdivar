import Header from "@/components/Header";
import AdsTable from "@/components/AdsTable";
import SendLink from "@/components/SendLink";
export default function Home() {
  const ads = [
    { id: "1", title: "آیفون ۱۳", info: "در حد نو", price: "۵۰ میلیون", location: "تهران", url: "#" },
    { id: "2", title: "پژو ۲۰۶", info: "مدل ۹۸", price: "۴۰۰ میلیون", location: "اصفهان", url: "#" },
  ];

  return (
    <div className="main-wrapper">
      <Header />
       <SendLink />
      <AdsTable ads={ads} />
    </div>
  );
}
