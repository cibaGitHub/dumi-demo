import { Form, Select, Switch } from 'antd';
import React from 'react';
import './index.less';

const { Option } = Select;

export default function (props: any) {
  const { children, configList = [], ...others } = props;
  // if (typeof props.children === 'function') {
  //   return children(others);
  // }

  console.log('others', others);

  return (
    <div className="usage-container">
      {children}
      <div className="config-panel">
        <Form size="small" layout="vertical">
          {configList.map((config: any) => {
            const type = (config.type || '').toLowerCase();
            if (!type) {
              return null;
            }

            return (
              <Form.Item label={config.name} name={config.name}>
                {type === 'boolean' ? <Switch /> : null}
                {type === 'enum' ? (
                  <Select
                    defaultValue={config.defaultValue}
                    options={config.options || []}
                  />
                ) : null}
              </Form.Item>
            );
          })}
          {/* <Form.Item label="a" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="a" name="username2">
            <Switch />
          </Form.Item> */}
        </Form>
      </div>
    </div>
  );
}
