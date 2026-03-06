"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-30 left-1/2 -translate-x-1/2-translate-y-1/2 w-100 h-100 shadow">
        <div>登录</div>
        <Input placeholder="请输入账号" />
        <Input placeholder="请输入密码" />
        <Button onClick={handleClick}>登录</Button>
        <Link href={"/signup"}>signup</Link>
      </div>
    </div>
  );
}
