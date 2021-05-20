import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Avatar, AvatarProps } from "../components/avatar/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  imageUrl: "https://i.pravatar.cc/300",
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  imageUrl: "https://i.pravatar.cc/300",
  size: "medium",
};
export const Small = Template.bind({});
Small.args = {
  imageUrl: "https://i.pravatar.cc/300",
  size: "small",
};
export const Regular = Template.bind({});
Regular.args = {
  imageUrl: "https://i.pravatar.cc/300",
};
