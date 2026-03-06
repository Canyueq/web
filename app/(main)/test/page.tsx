import { useEffect } from "react";
import { supabase } from "../../../supabase";
export default function Test() {
  const supabaseTest = async () => {
    await supabase
      .from("user")
      .select("*")
      .then((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    supabaseTest();
  }, []);
  return <></>;
}
