import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlbumCard from "./AlbumCard";

export default {
  title: "ReactComponentLibrary/AlbumCard",
  component: AlbumCard,
} as ComponentMeta<typeof AlbumCard>;

const Template: ComponentStory<typeof AlbumCard> = (args) => (
  <AlbumCard {...args} />
);

export const cardTemp = Template.bind({});
cardTemp.args = {
  imgSrc: "https://via.placeholder.com/100",
  albumName: "album name",
};
