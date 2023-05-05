
import React from 'react';
import { DocsWrapper, DocsContent } from '@storybook/components';
import { Description } from '@storybook/components';
import { useStorybookState, useGlobals } from '@storybook/api';
import button from 'raw-loader!../../src/components/button/button_usage.md';
import alert from 'raw-loader!../../src/components/alert/alert_usage.md';
import progressBar from 'raw-loader!../../src/components/progress-bar/progress-bar_usage.md';



const NOT_A_COMPONENT_MD = '`Browse to any component to see usage.`';
const COMPONENT_NOT_MAPPED_MD =
  "`Please import and add this component's usage markdown to the componentMap in .storybook/usage-addon/usage.js.`";
const Usage = (props) => {
  // First we determine the currently active story's kebab-cased name.
  const { storyId = '' } = useStorybookState();


  // Check if this is a component's story and grab it's name when available.
  const componentName = storyId.includes('components-')
    ? storyId.split('components-')[1].split('--')[0]
    : null;


  // 🎯 This is where you want to add your imported component usage markdown.
  // Watch out for the locale postfix and pay attention to pick the key names according to the story url. eg:
  // ?path=/story/components-tab-navigation--text-only > tab-navigation_en
  // or:
  // ?path=/story/components-brandheader--standard > brandheader_de
  const componentMap = {
    'button': button,
    'alert': alert,
    'progress-bar': progressBar, // Use a string key for the component

  };

  // Select the most appropriate markdown text based on if this is a component story and
  // if the component is present in the componentMap from above.
  const markdown = componentName
    ? componentMap[`${componentName}`] || COMPONENT_NOT_MAPPED_MD
    : NOT_A_COMPONENT_MD;

  return (
    props.active && (
      <div
        className="sbdocs-frame"
        style={{
          background: 'white',
          minHeight: '100%',
        }}
      >
        <DocsWrapper
          className="sbdocs sbdocs-wrapper addon-usage"
          style={{ minHeight: '100%' }}
        >
          <DocsContent
            className="sbdocs sbdocs-content"
            style={{ maxWidth: '1066px' }}
          >
            <Description markdown={markdown} />
          </DocsContent>
        </DocsWrapper>
      </div>
    )
  );
};

export default Usage;