import Link from "next/link";

export default function signup() {
  return (
    <div>
      <div>注册页面</div>
      <Link href={"/login"}>注册成功</Link>
    </div>
  );
}
