"use client";

import { supabase } from "../../../supabase";
import { Button } from "@/components/ui/button";
export default function Test() {
  const handleQuery = async () => {
    await supabase
      .from("user")
      .select("*")
      .then((res) => {
        console.log("查询结果", res);
      });
  };
  const handleCreate = async () => {
    const user = {
      name: "admin",
    };
    await supabase
      .from("user")
      .insert(user)
      .then((res) => {
        console.log("创建结果", res);
      });
  };
  return (
    <>
      <Button onClick={handleQuery}>查询所有用户</Button>
      <Button onClick={handleCreate}>新建用户</Button>
    </>
  );
}
