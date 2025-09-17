import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
const SearchBtn: React.FC = () => {
  return (
    <>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
    </>
  );
};

export default SearchBtn;
