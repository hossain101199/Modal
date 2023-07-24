import Test1 from "@/components/Test1";
import Test2 from "@/components/Test2";

const page = () => {
  return (
    <div>
      <Test1 />
      <div style={{ height: "500px" }}></div>
      <Test2 />
      <div style={{ height: "500px" }}></div>
    </div>
  );
};

export default page;
