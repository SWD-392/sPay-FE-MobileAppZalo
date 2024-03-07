import React from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
  Header,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
// import { displayNameState, userState } from "../state";
import BottomNavigationPage from "../components/homepage/bottomnavigation";
import { userState } from "../state";

const UserPage = () => {
  const user = useRecoilValue(userState);
  // const displayName = useRecoilValue(displayNameState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Header showBackIcon={false} title="Thông tin cá nhân" />
      <div className="mt-20">
        <Box
          flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={10}
        >
          <Box>
            <Avatar
              story="default"
              size={96}
              online
              src={user.avatar.startsWith("http") ? user.avatar : undefined}
            >
              {user.avatar}
            </Avatar>
          </Box>
          <Box flex flexDirection="row" alignItems="center" ml={8}>
            <Box>
              <Text.Title>
                {
                  // displayName
                  //  ||
                  user.name
                }
              </Text.Title>
            </Box>
            <Box ml={4}>
              <Button
                onClick={() => {
                  navigate("/form");
                }}
                size="small"
                icon={<Icon icon="zi-edit" />}
              />
            </Box>
          </Box>
        </Box>
        <Box m={0} p={0} mt={4}>
          <div className="section-container">
            <List>
              <List.Item title="Name" subTitle={user.name} />
              <List.Item
                title="Display Name"

                // subTitle={displayName}
              />
              <List.Item title="ID" subTitle={user.id} />
            </List>
          </div>
        </Box>
      </div>
    </Page>
  );
};

export default UserPage;
