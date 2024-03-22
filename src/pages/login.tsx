import React, { useState } from "react";
import { userLogin } from "../service/auth";
import { Box, Button, Input, Page, Text, useNavigate } from "zmp-ui";
import { useAuth } from "../hook/AuthContext";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, token } = useAuth();

  const handleLogin = async () => {
    const res = await userLogin(phoneNumber, password);
    if (res && res.accessToken && res.userKey) {
      login(res.accessToken, res.userKey);
      navigate("/");
    }
  };

  return (
    <Page className="page bg-white">
      <Text.Title className="mt-20">Đăng nhập</Text.Title>
      <Box>
        <form action="">
          <Input
            className="mt-10"
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            className="mt-10"
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            className="mt-10"
            flex
            justifyContent="center"
            alignItems="center"
          >
            <Button className="mt-10" onClick={handleLogin}>
              Đăng nhập
            </Button>
          </Box>
        </form>
      </Box>
    </Page>
  );
};

export default LoginPage;
