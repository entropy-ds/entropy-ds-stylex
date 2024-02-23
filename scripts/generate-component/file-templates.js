const indexTemplate = (componentName) => `export type { ${componentName}Props } from './${componentName}';
export { default as ${componentName} } from './${componentName}';
`;

const componentTemplate = (componentName) => `import { ForwardedRef, forwardRef } from 'react';

export type ${componentName}Props = {};

const ${componentName} = (props: ${componentName}Props, ref: ForwardedRef<HTMLDivElement>) => {
  return <div {...props} ref={ref}>${componentName}</div>;
};

export default forwardRef(${componentName});
`;

const storyTemplate = (componentName) => `import { StoryFn, Meta } from '@storybook/react';
import { ${componentName} } from '.';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
} as Meta<typeof ${componentName}>;

const Template: StoryFn<typeof ${componentName}> = (args) => (
  <${componentName} {...args}>${componentName}</${componentName}>
);

export const Default = Template.bind({});
`;

module.exports = {
  indexTemplate,
  componentTemplate,
  storyTemplate,
};
