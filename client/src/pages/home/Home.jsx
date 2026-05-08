import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Footer from "../../components/footer/footer";

const home = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Container1 />
      <Container2 />
      <Container3 />
      <Footer />
    </div>
  )
}


export default home