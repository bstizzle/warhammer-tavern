import React from 'react';
import { Button, Tooltip, Row, Col } from 'antd';
import { 
  LinkedinFilled,
  GithubFilled,
  IdcardFilled } from '@ant-design/icons';

const FootBar = () => {
  return(
    <Row>
      <Col span={2}>
        Created by Ben Stein
      </Col>
      <Col span={1}>
        <Tooltip title="LinkedIn">
          <Button type="primary" icon={<LinkedinFilled />} href="https://www.linkedin.com/in/benjamin-stein-650637133/"/>
        </Tooltip>
      </Col>
      <Col span={1}>
        <Tooltip title="Github">
          <Button type="primary" icon={<GithubFilled />} href="https://github.com/bstizzle/warhammer-tavern"/>
        </Tooltip>
      </Col>
      <Col span={1}>
        <Tooltip title="Portfolio">
          <Button type="primary" icon={<IdcardFilled />} href="https://ben-stein.netlify.app"/>
        </Tooltip>
      </Col>
    </Row>
  );
}

export default FootBar;