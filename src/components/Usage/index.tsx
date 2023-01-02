import { Form, Select, Switch } from 'antd';
import React, { useState } from 'react';
import './index.less';

export default function (props: any) {
  const { children, configList = [], ...others } = props;
  const [form] = Form.useForm();
  const [values, setValues] = useState({});

  const onFormValuesChange = (changedValues: any, allValues: any) => {
    console.log('jinlaile', changedValues, allValues);
    setValues(allValues);
  };

  return (
    <div className="usage-container">
      {typeof props.children === 'function'
        ? props.children({ configList, values })
        : props.children}
      <div className="config-panel">
        <Form
          form={form}
          size="small"
          layout="vertical"
          initialValues={{}}
          onValuesChange={onFormValuesChange}
        >
          {configList.map((config: any) => {
            const type = (config.type || '').toLowerCase();
            if (!type) {
              return null;
            }

            return [
              type === 'boolean' ? (
                <Form.Item label={config.name} name={config.name}>
                  <Switch />
                </Form.Item>
              ) : null,
              type === 'enum' ? (
                <Form.Item label={config.name} name={config.name}>
                  <Select
                    defaultValue={config.defaultValue}
                    options={config.options || []}
                  />
                </Form.Item>
              ) : null,
            ];
          })}
        </Form>
      </div>
    </div>
  );
}
