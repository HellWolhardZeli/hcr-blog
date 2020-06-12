import React from "react";
import { DiscussionEmbed } from "disqus-react";

export default function PostComments(props) {
  const { slug } = props;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug }
  };
  return <DiscussionEmbed {...disqusConfig} />;
}
