import { supabase } from "@/supabase";

//1.注册
export const signUp = async (data: {
  phone?: string;
  email: string;
  password: string;
}) => {
  await supabase.auth
    .signUp(data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};

//2.登录
export const logIn = async (data: { email: string; password: string }) => {
  const { email, password } = data;
  await supabase.auth
    .signInWithPassword({
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};

//3.登出
export const signOut = async (data: { email: string; password: string }) => {
  const { email, password } = data;
  await supabase.auth
    .signInWithPassword({
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};
// 4. 获取当前登录用户信息
export const getCurrentUser = async () => {
  // 方式1：主动获取当前会话
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    console.log("当前无登录用户");
    return null;
  }

  // 方式2：直接获取当前用户（更简洁）
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("当前登录用户：", user);
  return user;
};

// // 5. 监听用户登录状态变化（实时更新）
// export const listenToAuthChanges = async () => {
//   supabase.auth.onAuthStateChange((event, session) => {
//     switch (event) {
//       case "SIGNED_IN":
//         console.log("用户已登录：", session.user);
//         break;
//       case "SIGNED_OUT":
//         console.log("用户已退出登录");
//         break;
//       case "PASSWORD_RECOVERY":
//         console.log("用户触发了密码重置");
//         break;
//       case "TOKEN_REFRESHED":
//         console.log("令牌已自动刷新");
//         break;
//       default:
//         console.log("鉴权状态变化：", event);
//     }
//   });
// };

//6. 获取邮箱验证码
export const resendConfirmationEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resend({
    type: "signup", // 类型为注册验证
    email: email, // 需要重新验证的用户邮箱
  });
  if (error) {
    console.error("重新发送验证邮件失败：", error.message);
    return;
  }
  console.log("验证邮件已重新发送，请查收邮箱");
};
