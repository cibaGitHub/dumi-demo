import React from 'react';
// export { default as Foo } from './Foo';
import Demo from './components/Demo';
import Usage from './components/Usage';
import configList from './props.json';

export default (props: any) => {
  return <Usage configList={configList}>{(p: any) => <Demo {...p} />}</Usage>;
};
