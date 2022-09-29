import React from "react";
import { useParams } from "react-router-dom";

import style from "./ShopItemPage.module.css";

function ShopItemPage() {
  const { id } = useParams();
  return <div>ShopItemPage {id}</div>;
}

export default ShopItemPage;
