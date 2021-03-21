import request from "@/utils/request";

// 登录接口
export const login = (data) => request(
  '/api/y3h2/user/login',
  {
    method: 'POST',
    data,
  }
);
