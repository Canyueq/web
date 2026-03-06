import { Button } from "../ui/button";
import Link from "next/link";

export default function HeaderLayout({
  className,
}: Readonly<{ className: string }>) {
  return (
    <header className={className}>
      <h1>Next.js</h1>
      <Button className="bg-blue-600">
        <Link href="/login">Next.js入门</Link>
      </Button>
      <Link href="/login" className="">
        中文文档
      </Link>
      <Link href="/login" className="border-red-600">
        网站实例
      </Link>
      <Link href="/login" className="border-red-600">
        博客
      </Link>
      <Link href="http://www.reactjs.cn">React</Link>
      <Link href="https://www.tailwindcss.cn/">TailwindCSS</Link>
      <Link href="https://www.shadcn-ui.cn/" className="border-red-600">
        Shadcn/ui
      </Link>
      <Link href="https://www.nextra.cn/" className="border-red-600">
        Nextra
      </Link>
      <Link href="https://www.nextjs.org/" className="border-red-600">
        英文官网
      </Link>
      <Link href="https://wwww.github.com" className="border-red-600">
        GitHub
      </Link>
    </header>
  );
}
