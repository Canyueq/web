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
import { resendConfirmationEmail, signUp } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Signup() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      none: "",
    },
  });
  const onSubmit = async (values: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) => {
    signUp(values).then(() => {
      router.push("/");
    });
  };
  const getConfirm = async () => {
    const email = form.getValues("email");
    await resendConfirmationEmail(email);
  };
  return (
    <div className="absolute top-30 left-1/2 -translate-y-1/2-translate-x-1/2 shadow w-100 h-100">
      <Form {...form}>
        <form className="m-10" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name={"name"}
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="whitespace-nowrap">名称</FormLabel>
                <FormControl>
                  <Input className="w-60" placeholder="请输入名称" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="whitespace-nowrap">邮箱</FormLabel>
                <FormControl>
                  <Input className="w-60" placeholder="请输入邮箱" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"none"}
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="whitespace-nowrap">验证</FormLabel>
                <FormControl>
                  <Input
                    className="w-38 m-none"
                    placeholder="请输入邮箱验证码"
                    {...field}
                  />
                </FormControl>
                <FormControl>
                  <Button
                    className="w-20 m-none"
                    onClick={getConfirm}
                    type="button"
                  >
                    获取验证码
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"password"}
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="whitespace-nowrap">密码</FormLabel>
                <FormControl>
                  <Input className="w-60" placeholder="请输入密码" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"outline"}>取消</Button>
          <Button variant={"default"} type="submit">
            注册
          </Button>
        </form>
      </Form>
    </div>
  );
}
