import React from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import Header from "../components/homepage/header";
import Footter from "../components/homepage/footter";
import ListPackage from "../components/homepage/listpackage";


const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page">
    <Header/>
    <ListPackage/>
    <Footter/>
    </Page>
  );
};

export default HomePage;