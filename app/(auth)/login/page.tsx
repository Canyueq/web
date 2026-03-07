"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const form = useForm({
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const onSubmit = async (values: { email: string; password: string }) => {
    console.log("提交的数据", values);
    await supabase.auth.signInWithPassword(values).then((res) => {
      console.log("登录结果", res);
      router.push("/");
    });
  };
  return (
    <div className="absolute top-30 left-1/2 -translate-x-1/2-translate-y-1/2 w-100 h-100 shadow">
      <div className="m-20">
        登录
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="whitespace-nowrap">账号</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="请输入账号"
                      {...field}
                      className="w-60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="whitespace-nowrap">密码</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="请输入密码"
                      {...field}
                      className="w-60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="flex">
              登录
            </Button>
            <Link href={"/signup"}>signup</Link>
          </form>
        </Form>
      </div>
    </div>
  );
}
